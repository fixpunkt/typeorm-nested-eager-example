import "reflect-metadata"
import { DataSource } from "typeorm"
import { B } from "./entity/B"
import { C } from "./entity/C"
import { D } from "./entity/D"
import { A } from "./entity/A"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [B, C, D, A],
  subscribers: [],
  migrations: [],
})
