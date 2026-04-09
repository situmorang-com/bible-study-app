import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	pin: text('pin').notNull(), // hashed 4-digit PIN for simplicity
	avatarEmoji: text('avatar_emoji').notNull().default('📖'),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const lessonProgress = sqliteTable('lesson_progress', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => users.id),
	lessonId: integer('lesson_id').notNull(),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
	currentSection: integer('current_section').notNull().default(0),
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
