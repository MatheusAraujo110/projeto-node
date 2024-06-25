import express from 'express';

const app = express()
app.use(express.json())

app.get('/usuarios/:id', (req, res) => {
    console.log(req)

    res.send("Rota acessada com sucesso!")
})

app.post('/usuarios', (req, res) => {
    console.log(req)

    res.send("Olá!")
})

app.listen(3000)