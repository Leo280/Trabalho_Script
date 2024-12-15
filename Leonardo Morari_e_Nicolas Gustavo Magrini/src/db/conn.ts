import { CamelCasePlugin, Kysely, SqliteDialect } from 'kysely';
import SQLite from 'better-sqlite3';
import { Database } from '../models/database-model';

const dialect = new SqliteDialect({
  database: new SQLite('./src/db/trabalho_mvc.db'),
});

export const db = new Kysely<Database>({
  dialect,
  plugins: [new CamelCasePlugin()],
});
