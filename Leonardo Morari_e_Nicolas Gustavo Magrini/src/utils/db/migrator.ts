import { FileMigrationProvider, Migrator } from 'kysely';
import { promises as fs } from 'fs';
import * as path from 'path';
import { db } from '../../db/conn';

const migrationProvider = new FileMigrationProvider({
  fs,
  path,
  migrationFolder: path.join(__dirname, '../../db/migrations'),
});

const migrator = new Migrator({
  db,
  provider: migrationProvider,
});

const migrate = async () => {
  const direction = process.argv[2];

  if (direction === 'up') {
    const { error } = await migrator.migrateToLatest();
    if (error) {
      console.error('Erro ao rodar as migrations: ', error);
    } else {
      console.log('Migrations aplicadas com sucesso');
    }
  } else if (direction === 'down') {
    const { error } = await migrator.migrateToLatest();
    if (error) {
      console.error('Erro ao reverter a migration: ', error);
    } else {
      console.log('Migration revertida com sucesso com sucesso');
    }
  } else {
    console.log('Comando Inválido! Use up ou down');
  }

  await db.destroy();
};

migrate();
