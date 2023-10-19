import { Request, Response } from "express"


const getFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id

    return res.send('GET FILMS ' + filmId)
}

export {getFilms}