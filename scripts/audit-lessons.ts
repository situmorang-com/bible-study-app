import { lessons } from '../src/lib/lessons/index.js';

type LessonIssue = {
	lessonId: number;
	title: string;
	issue: string;
};

const issues: LessonIssue[] = [];

for (const lesson of lessons) {
	if (!lesson.source) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: 'Missing source metadata'
		});
	}

	if ((lesson.passThreshold ?? 70) !== 70) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: `Pass threshold should be 70, found ${lesson.passThreshold ?? 70}`
		});
	}

	if (!lesson.finalAssessmentTitle) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: 'Missing finalAssessmentTitle'
		});
	}

	if (!lesson.finalAssessmentDescription) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: 'Missing finalAssessmentDescription'
		});
	}

	if (lesson.quiz.length !== 10) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: `Final quiz should contain 10 questions, found ${lesson.quiz.length}`
		});
	}

	const checkpointCount = lesson.sections.filter((section) => !!section.check).length;
	if (checkpointCount !== lesson.sections.length) {
		issues.push({
			lessonId: lesson.id,
			title: lesson.title,
			issue: `Every section must have a checkpoint question, found ${checkpointCount}/${lesson.sections.length}`
		});
	}
}

if (issues.length === 0) {
	console.log('All lessons comply with the Lesson 1 structure.');
	process.exit(0);
}

console.table(
	issues.map((entry) => ({
		lesson: `${entry.lessonId}. ${entry.title}`,
		issue: entry.issue
	}))
);

process.exit(1);
