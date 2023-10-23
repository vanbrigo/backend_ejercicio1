import { Router } from "express"
import { createFilms, delateFilms, getFilmById, getFilms, updateFilmsById } from "../controllers/filmsController"

const router = Router()

router.get('/', getFilms)
router.post('/',createFilms)
router.put('/:id',updateFilmsById)
router.delete('/:id',delateFilms)
router.get('/', getFilmById)






export { router }