import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { createSqliteClient } from './sqlite';

export const sqlite = createSqliteClient();

export const db = drizzle(sqlite, { schema });
