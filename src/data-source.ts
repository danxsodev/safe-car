import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

const portDb = process.env.TYPEORM_PORT as unknown as number | undefined;

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: portDb,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  migrations: [],
});
