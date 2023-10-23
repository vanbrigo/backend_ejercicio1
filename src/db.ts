import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697790010077 } from "./migration/1697790010077-film"
import { Film } from "./models/Film"
import { CreateGenresTable1698047096951 } from "./migration/1698047096951-create-genres-table"
import { FilmGenre1698048104388 } from "./migration/1698048104388-film_genre"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "Ana1940++",
 database: "prueba_films",
 entities: [Film],
 migrations: [Film1697790010077,CreateGenresTable1698047096951,FilmGenre1698048104388],
 synchronize: false,
 logging: false,
})