import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697790010077 } from "./migration/1697790010077-film"
import { Film } from "./models/Film"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "Ana1940++",
 database: "prueba_films",
 entities: [Film],
 migrations: [Film1697790010077],
 synchronize: false,
 logging: false,
})