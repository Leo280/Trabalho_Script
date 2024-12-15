import { readdirSync } from 'fs';
import path from 'path';
import { db } from './conn';

const migrationsPath = path.join(__dirname, './migrations');

const migrations = readdirSync(migrationsPath).map((file) => ({
  name: path.basename(file, path.extname(file)),
  module: require(path.join(migrationsPath, file)),
}));

async function migrate(direction: 'up' | 'down') {
  for (const migration of migrations) {
    const name = migration.name;
    if (direction === 'up') {
      await migration.module[direction](db);
    } else {
      await migration.module[direction](db);
    }
  }
}

const direction = process.argv[2];
if (direction === 'up' || direction === 'down') {
  try {
    migrate(direction);
  } catch (error) {
    console.error(`Migration faile: ${error}`);
  }
}
