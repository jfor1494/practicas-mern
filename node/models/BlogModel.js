//importamos la coneccion en la base de datos
import db from "../database/db.js";
//importamos sequalize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blog',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel