import { Router } from "express"

const router = Router()

router.get('/films/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('GET FILMS ' + filmId)
})

router.post('/films/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('CREATE FILMS ' + filmId) 
})

router.put('/films/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('UPDATE FILMS ' + filmId) 
})

router.delete('/films/:id',(req, res)=>{
    const filmId = req.params.id
    return res.send('DELETE FILMS '+ filmId) 
})





export { router }