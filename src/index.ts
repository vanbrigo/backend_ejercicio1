import express from "express";
import { router as routerFilms } from "./routes/filmsRoutes"

const app = express()

const PORT= process.env.PORT || 3000

app.use('/', routerFilms)

app.listen(PORT, ()=>{
    console.log(`Server running ${PORT}`)
})