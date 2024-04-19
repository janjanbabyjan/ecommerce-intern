import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { UserAddress } from "./entity/UserAddress"
import { Product } from "./entity/Product"
import { Cart } from "./entity/Cart"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "janeiei54505",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Cart,Category,Product,UserAddress,Users],
    migrations: [],
    subscribers: [],
})
