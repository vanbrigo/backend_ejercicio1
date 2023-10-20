import { Router } from "express"
import { createFilms, delateFilms, getFilms, updateFilmsById } from "../controllers/filmsController"

const router = Router()

router.get('/:id', getFilms)
router.post('/:id',createFilms)
router.put('/:id',updateFilmsById)
router.delete('/:id',delateFilms)






export { router }