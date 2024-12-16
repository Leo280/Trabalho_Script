import * as fs from 'fs';
import * as path from 'path';

const migrationsDir = path.join(__dirname, '../../db/migrations');

const migrationName = process.argv[2];

if (!migrationName) {
  console.log('Digite um nome para a migration');
  process.exit(1);
}

const timestamp = new Date().toISOString().replace(/[:.-]/g, '').slice(0, 15);

const fileName = `${timestamp}-${migrationName}.ts`;

const filePath = path.join(migrationsDir, fileName);

const preContent = `import { Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  // Digite sua migration aqui - Use npm run migration:up para rodar
}

export async function down(db: Kysely<any>) {
  // Digite seu rollback aqui - Use npm run migration:down para rodar
}
`;

fs.writeFileSync(filePath, preContent, 'utf-8');

console.log(`Migration criada com sucesso em ${filePath}`);
