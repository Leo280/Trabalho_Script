import { Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable('bookings')
    .ifNotExists()
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('date', 'text', (col) => col.notNull())
    .addColumn('cpf', 'text', (col) => col.notNull())
    .addColumn('time', 'text', (col) => col.notNull())
    .addColumn('user_id', 'text', (col) => col.references('users.id').onDelete('cascade').notNull())
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.dropTable('reservations').ifExists().execute();
}
