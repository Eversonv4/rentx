import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1678117612292 } from "./migrations/1678117612292-default";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category],
  migrations: [CreateCategories1678117612292],
});
