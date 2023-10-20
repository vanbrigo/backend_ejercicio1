import { Request, Response } from "express"


const getFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id

    return res.send(`GET FILM BY ID: ${filmId}`)
}

const createFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id
    console.log('create')
    console.log(req.body.title)
    return res.send('CREATE FILMS ' + filmId) 
}

const updateFilmsById = (req:Request, res:Response)=>{
    const filmId = req.params.id
    return res.send('UPDATE FILMS ' + filmId) 
}

const delateFilms = (req:Request, res:Response)=>{
    const filmId = req.params.id
    return res.send('DELETE FILMS '+ filmId) 
}

export {getFilms,createFilms,updateFilmsById,delateFilms}