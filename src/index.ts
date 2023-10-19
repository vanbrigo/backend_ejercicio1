import express from "express";

const app = express()

const PORT= process.env.PORT || 3000

app.get('/films/:id',(req, res)=>{

    return res.send('GET FILMS')
})

app.post('/films/:id',(req, res)=>{
    return res.send('CREATE FILMS') 
})

app.put('/films/:id',(req, res)=>{
    const filmId = req.params.id

    console.log(req.params.id)
    return res.send('UPDATE FILMS ' + filmId) 
})

app.delete('/films/:id',(req, res)=>{

    const filmId = req.params.id

    return res.send('DELETE FILMS '+ filmId) 
})

app.listen(PORT, ()=>{
    console.log(`Server running ${PORT}`)
})