const express = require('express')
const router = require('./src/router/routes')
const sequelize = require('./src/config/config')
 
const app = express()
 
app.use(express.json())
app.use(router)
 
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tabela criada com sucesso")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela", error)
    })
 
app.listen(3000, () => {
    console.log("Servidor rodando na porta", 3000)
})