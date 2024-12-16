import { Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  await db.schema
    .alterTable('users')
    .addColumn('name', 'text', (col) => col.notNull())
    .execute();
}
