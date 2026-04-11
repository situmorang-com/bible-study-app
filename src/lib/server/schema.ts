import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	phoneNumber: text('phone_number').notNull().default(''),
	pin: text('pin').notNull(), // hashed 4-digit PIN for simplicity
	avatarEmoji: text('avatar_emoji').notNull().default('📖'),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export type User = typeof users.$inferSelect;

export const lessonCatalog = sqliteTable('lesson_catalog', {
	lessonId: integer('lesson_id').primaryKey(),
	titleId: text('title_id').notNull(),
	subtitleId: text('subtitle_id').notNull(),
	sourceProvider: text('source_provider').notNull(),
	sourceSeries: text('source_series').notNull(),
	sourceLessonNumber: integer('source_lesson_number').notNull(),
	sourceTitleEn: text('source_title_en').notNull(),
	sourceUrl: text('source_url').notNull()
});

export type LessonCatalog = typeof lessonCatalog.$inferSelect;

export const lessonProgress = sqliteTable('lesson_progress', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => users.id),
	lessonId: integer('lesson_id').notNull(),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
	currentSection: integer('current_section').notNull().default(0),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
	completedAt: integer('completed_at', { mode: 'timestamp' }),
});

export const quizResults = sqliteTable('quiz_results', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => users.id),
	lessonId: integer('lesson_id').notNull(),
	score: integer('score').notNull(),
	totalQuestions: integer('total_questions').notNull(),
	percentage: real('percentage').notNull(),
	completedAt: integer('completed_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
