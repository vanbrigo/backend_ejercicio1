import { Router } from "express"
import { getFilms } from "../controllers/filmsController"

const router = Router()

router.get('/:id', getFilms)

router.post('/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('CREATE FILMS ' + filmId) 
})

router.put('/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('UPDATE FILMS ' + filmId) 
})

router.delete('/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('DELETE FILMS '+ filmId) 
})





export { router }