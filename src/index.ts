import express from "express";
import { router as routerFilms } from "./routes/filmsRoutes"
import { AppDataSource } from "./db";


const app = express()

const PORT= process.env.PORT || 3000
// middleware
app.use(express.json())

app.use('/films', routerFilms)

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');

        app.listen(PORT, ()=>{
            console.log(`Server running ${PORT}`)
        })
    })
    .catch(error => {
        console.log(error)
    })

