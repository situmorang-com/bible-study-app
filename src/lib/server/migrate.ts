import { createSqliteClient, getDatabasePath } from './sqlite';

const sqlite = createSqliteClient();

console.log(`✅ Database migrated successfully at ${getDatabasePath()}`);
sqlite.close();
