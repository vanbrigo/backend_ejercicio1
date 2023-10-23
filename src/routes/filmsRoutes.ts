import { Router } from "express"
import { createFilms, delateFilms, getFilms, updateFilmsById } from "../controllers/filmsController"

const router = Router()

router.get('/', getFilms)
router.post('/',createFilms)
router.put('/:id',updateFilmsById)
router.delete('/:id',delateFilms)






export { router }