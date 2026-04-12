import Database from 'better-sqlite3';
import { mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { lessons } from '../lessons';

const DATABASE_FILENAME = 'bible-study.db';

const SCHEMA_SQL = `
	CREATE TABLE IF NOT EXISTS users (
		id TEXT PRIMARY KEY,
		name TEXT NOT NULL,
		phone_number TEXT NOT NULL DEFAULT '',
		pin TEXT NOT NULL,
		avatar_emoji TEXT NOT NULL DEFAULT '📖',
		created_at INTEGER NOT NULL DEFAULT (unixepoch())
	);

	CREATE TABLE IF NOT EXISTS lesson_catalog (
		lesson_id INTEGER PRIMARY KEY,
		title_id TEXT NOT NULL,
		subtitle_id TEXT NOT NULL,
		source_provider TEXT NOT NULL,
		source_series TEXT NOT NULL,
		source_lesson_number INTEGER NOT NULL,
		source_title_en TEXT NOT NULL,
		source_url TEXT NOT NULL
	);

	CREATE TABLE IF NOT EXISTS lesson_progress (
		id TEXT PRIMARY KEY,
		user_id TEXT NOT NULL REFERENCES users(id),
		lesson_id INTEGER NOT NULL,
		completed INTEGER NOT NULL DEFAULT 0,
		current_section INTEGER NOT NULL DEFAULT 0,
		last_viewed_section INTEGER NOT NULL DEFAULT 0,
		updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
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
	CREATE UNIQUE INDEX IF NOT EXISTS idx_lesson_catalog_source_number ON lesson_catalog(source_lesson_number);
`;

const seedLessonCatalog = (sqlite: Database.Database) => {
	const upsertLesson = sqlite.prepare(`
		INSERT INTO lesson_catalog (
			lesson_id,
			title_id,
			subtitle_id,
			source_provider,
			source_series,
			source_lesson_number,
			source_title_en,
			source_url
		) VALUES (
			@lessonId,
			@titleId,
			@subtitleId,
			@sourceProvider,
			@sourceSeries,
			@sourceLessonNumber,
			@sourceTitleEn,
			@sourceUrl
		)
		ON CONFLICT(lesson_id) DO UPDATE SET
			title_id = excluded.title_id,
			subtitle_id = excluded.subtitle_id,
			source_provider = excluded.source_provider,
			source_series = excluded.source_series,
			source_lesson_number = excluded.source_lesson_number,
			source_title_en = excluded.source_title_en,
			source_url = excluded.source_url
	`);

	const rows = lessons.map((lesson) => ({
		lessonId: lesson.id,
		titleId: lesson.title,
		subtitleId: lesson.subtitle,
		sourceProvider: lesson.source.provider,
		sourceSeries: lesson.source.series,
		sourceLessonNumber: lesson.source.lessonNumber,
		sourceTitleEn: lesson.source.titleEn,
		sourceUrl: lesson.source.url
	}));

	const transaction = sqlite.transaction((entries: typeof rows) => {
		for (const entry of entries) {
			upsertLesson.run(entry);
		}
	});

	transaction(rows);
};

const migrateUsersTable = (sqlite: Database.Database) => {
	const columns = sqlite.prepare(`PRAGMA table_info(users)`).all() as Array<{ name: string }>;
	const hasPhoneNumber = columns.some((column) => column.name === 'phone_number');

	if (!hasPhoneNumber) {
		sqlite.exec(`ALTER TABLE users ADD COLUMN phone_number TEXT NOT NULL DEFAULT ''`);
	}
};

const migrateLessonProgressTable = (sqlite: Database.Database) => {
	const columns = sqlite.prepare(`PRAGMA table_info(lesson_progress)`).all() as Array<{ name: string }>;
	const hasUpdatedAt = columns.some((column) => column.name === 'updated_at');
	const hasLastViewedSection = columns.some((column) => column.name === 'last_viewed_section');

	if (!hasUpdatedAt) {
		sqlite.exec(`ALTER TABLE lesson_progress ADD COLUMN updated_at INTEGER NOT NULL DEFAULT 0`);
		sqlite.exec(`
			UPDATE lesson_progress
			SET updated_at = COALESCE(completed_at, CAST(strftime('%s', 'now') AS INTEGER))
			WHERE updated_at = 0 OR updated_at IS NULL
		`);
	}

	if (!hasLastViewedSection) {
		sqlite.exec(`ALTER TABLE lesson_progress ADD COLUMN last_viewed_section INTEGER NOT NULL DEFAULT 0`);
		sqlite.exec(`
			UPDATE lesson_progress
			SET last_viewed_section = current_section
			WHERE last_viewed_section = 0 AND current_section > 0
		`);
	}
};

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
	migrateUsersTable(sqlite);
	migrateLessonProgressTable(sqlite);
	seedLessonCatalog(sqlite);

	return sqlite;
};
