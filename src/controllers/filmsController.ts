import { Request, Response } from "express"


const getFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id

    return res.send('GET FILMS ' + filmId)
}

const createFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id
    return res.send('CREATE FILMS ' + filmId) 
}

const updateFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id
    return res.send('UPDATE FILMS ' + filmId) 
}

const delateFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id
    return res.send('DELETE FILMS '+ filmId) 
}

export {getFilms,createFilms,updateFilms,delateFilms}