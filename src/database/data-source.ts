import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as path from 'path'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false, // Desativado para usar migrations com segurança - Se fosse true, o TypeORM mudaria as tabelas automaticamente e poderia apagar dados de produção
  logging: true,      // Exibe as queries SQL no terminal para ajudar o dev júnior

  // Busca dinamicamente na pasta correta baseando-se em onde o arquivo atual está rodando
  entities: [path.join(__dirname, '../entities/**/*.{js,ts}')],
  migrations: [path.join(__dirname, './migrations/**/*.{js,ts}')]
});