const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "sesiCRUD", 
    "root", 
    "root",
    {
        host: "localhost",
        port: 3306, 
        dialect: "mysql",
        logging: false      
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso MYSQL")
    })
    .catch((err) => {
        console.error("Não foi possível se conectar MySQL")
    })

module.exports = sequelize;