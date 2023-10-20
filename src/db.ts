import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "Ana1940++",
 database: "prueba_films",
 entities: [],
 synchronize: false,
 logging: false,
})