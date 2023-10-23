import { Request, Response } from "express"
import { Film } from "../models/Film"


const getFilms = async(req:Request, res:Response)=>{
    try {
        const films = await Film.find()

        return res.send(films)
    } catch (error) {
        return res.send(error)
    }
}

const createFilms = async (req:Request, res:Response)=>{
    try {
        const newFilm = await Film.create(
            {
                title: req.body.title,
                director: req.body.director
            }
        ).save()

        console.log(newFilm)
        return res.send(newFilm) 
    } catch (error) {
        return res.send(error)
    }
}

const updateFilmsById = async(req:Request, res:Response)=>{
    const filmToUpdate=req.params.id
    const filmUpdated= await Film.update({id: parseInt(filmToUpdate)}, req.body)
    if (filmUpdated.affected) {
        return res.json('Se ha actualizado correctamente el id ' + filmToUpdate) 
      }
      return res.json('No se han realizado cambios')  
}

const delateFilms = async(req:Request, res:Response)=>{
    try {
        const filmIdToDelete = req.params.id
        const filmDeleted = await Film.delete(
            {
            id: parseInt(filmIdToDelete)
            }
        )
        if(filmDeleted.affected){
            return res.send('Se ha eliminado correctamente '+ filmIdToDelete)
        }
        return res.send('No se ha eliminado nada') 

    } catch (error) {
        return res.send(error)
    }
}

export {getFilms,createFilms,updateFilmsById,delateFilms}