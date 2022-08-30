// import { DataSource } from "typeorm";
// import { User } from "./src/modules/accounts/entities/User";

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "delivery-app",
//     entities: [User],
//     subscribers: [],
//     migrations: [],
// })

// AppDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })