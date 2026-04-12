import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuid } from 'uuid';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const userId = cookies.get('userId');
	if (!userId) return json({ error: 'Not authenticated' }, { status: 401 });

	const { lessonId, currentSection, lastViewedSection, viewedAt } = await request.json();
	const parsedLessonId = Number(lessonId);
	const parsedCurrentSection = Number(currentSection);
	const parsedLastViewedSection = Number(lastViewedSection ?? currentSection);
	const viewedAtDate = viewedAt ? new Date(viewedAt) : new Date();

	if (
		!Number.isInteger(parsedLessonId) ||
		!Number.isInteger(parsedCurrentSection) ||
		!Number.isInteger(parsedLastViewedSection) ||
		Number.isNaN(viewedAtDate.getTime()) ||
		parsedLessonId < 1 ||
		parsedCurrentSection < 0 ||
		parsedLastViewedSection < 0
	) {
		return json({ error: 'Invalid progress payload' }, { status: 400 });
	}

	try {
		const { db } = await import('$lib/server/db');
		const { lessonProgress } = await import('$lib/server/schema');
		const { eq, and } = await import('drizzle-orm');

		const existing = db.select().from(lessonProgress)
			.where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId)))
			.get();

		if (existing) {
			const existingUpdatedAtTime = existing.updatedAt instanceof Date
				? existing.updatedAt.getTime()
				: new Date(existing.updatedAt).getTime();
			const shouldAdvanceView = Number.isNaN(existingUpdatedAtTime)
				? true
				: viewedAtDate.getTime() >= existingUpdatedAtTime;

			db.update(lessonProgress)
				.set({
					currentSection: Math.max(existing.currentSection, parsedCurrentSection),
					lastViewedSection: shouldAdvanceView
						? parsedLastViewedSection
						: existing.lastViewedSection,
					updatedAt: shouldAdvanceView ? viewedAtDate : existing.updatedAt
				})
				.where(eq(lessonProgress.id, existing.id))
				.run();
		} else {
			db.insert(lessonProgress).values({
				id: uuid(),
				userId,
				lessonId: parsedLessonId,
				currentSection: parsedCurrentSection,
				lastViewedSection: parsedLastViewedSection,
				updatedAt: viewedAtDate,
				completed: false
			}).run();
		}

		return json({ success: true });
	} catch (e) {
		return json({ error: 'Database error' }, { status: 500 });
	}
};
