import express from 'express';

const app = express()

app.get('/usuarios', (req, res) => {
    res.send("Rota acessada com sucesso!")
})

app.listen(3000)