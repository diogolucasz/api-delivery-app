import { DataSource } from "typeorm";
import "reflect-metadata";
import { User } from "./src/modules/accounts/entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "delivery-app",
    entities: [User],
    subscribers: [],
    migrations: [],
})
