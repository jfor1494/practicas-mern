import { Sequelize } from "sequelize"; // Importa Sequelize

const db = new Sequelize('appToDo','root','J1494@',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db
