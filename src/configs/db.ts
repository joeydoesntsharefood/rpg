import { DataSource } from "typeorm";
import entities from "../entities";
import { db, dbPassword, dbUser, dbType as type } from "./variables";

const url = db?.replace("<db_use>", dbUser)?.replace("<db_password>", dbPassword);

const AppDataSource = new DataSource({
  type: type as any,
  url,
  entities,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
});

export { AppDataSource };