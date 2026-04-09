import Database from 'better-sqlite3';
import { mkdirSync } from 'fs';
import { join, resolve } from 'path';

const DATABASE_FILENAME = 'bible-study.db';

const SCHEMA_SQL = `
	CREATE TABLE IF NOT EXISTS users (
		id TEXT PRIMARY KEY,
		name TEXT NOT NULL,
		pin TEXT NOT NULL,
		avatar_emoji TEXT NOT NULL DEFAULT '📖',
		created_at INTEGER NOT NULL DEFAULT (unixepoch())
	);

	CREATE TABLE IF NOT EXISTS lesson_progress (
		id TEXT PRIMARY KEY,
		user_id TEXT NOT NULL REFERENCES users(id),
		lesson_id INTEGER NOT NULL,
		completed INTEGER NOT NULL DEFAULT 0,
		current_section INTEGER NOT NULL DEFAULT 0,
		completed_at INTEGER,
		UNIQUE(user_id, lesson_id)
	);

	CREATE TABLE IF NOT EXISTS quiz_results (
		id TEXT PRIMARY KEY,
		user_id TEXT NOT NULL REFERENCES users(id),
		lesson_id INTEGER NOT NULL,
		score INTEGER NOT NULL,
		total_questions INTEGER NOT NULL,
		percentage REAL NOT NULL,
		completed_at INTEGER NOT NULL DEFAULT (unixepoch())
	);

	CREATE INDEX IF NOT EXISTS idx_progress_user ON lesson_progress(user_id);
	CREATE INDEX IF NOT EXISTS idx_quiz_user ON quiz_results(user_id);
	CREATE INDEX IF NOT EXISTS idx_quiz_score ON quiz_results(percentage DESC);
`;

export const getDataDirectory = () =>
	process.env.DATA_DIR ? resolve(process.env.DATA_DIR) : join(process.cwd(), 'data');

export const getDatabasePath = () => join(getDataDirectory(), DATABASE_FILENAME);

export const createSqliteClient = () => {
	const dataDirectory = getDataDirectory();
	mkdirSync(dataDirectory, { recursive: true });

	const sqlite = new Database(join(dataDirectory, DATABASE_FILENAME));
	sqlite.pragma('journal_mode = WAL');
	sqlite.pragma('foreign_keys = ON');
	sqlite.exec(SCHEMA_SQL);

	return sqlite;
};
