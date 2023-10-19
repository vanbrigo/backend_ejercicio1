import { Router } from "express"
import { createFilms, delateFilms, getFilms, updateFilms } from "../controllers/filmsController"

const router = Router()

router.get('/:id', getFilms)

router.post('/:id',createFilms)

router.put('/:id',updateFilms)

router.delete('/:id',delateFilms)





export { router }