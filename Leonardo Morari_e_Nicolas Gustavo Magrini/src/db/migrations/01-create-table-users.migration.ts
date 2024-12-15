import { Kysely, sql } from 'kysely';
import { uptime } from 'process';

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable('users')
    .ifNotExists()
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('email', 'text', (col) => col.notNull().unique())
    .addColumn('password', 'text', (col) => col.notNull())
    .addColumn('created_at', 'text', (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.dropTable('users').ifExists().execute();
}
