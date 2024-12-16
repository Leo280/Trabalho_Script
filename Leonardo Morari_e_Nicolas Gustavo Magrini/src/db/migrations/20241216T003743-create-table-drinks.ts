import { Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable('drinks')
    .ifNotExists()
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('description', 'text', (col) => col.notNull())
    .addColumn('img_path', 'text', (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.dropTable('drinks').ifExists().execute();
}
