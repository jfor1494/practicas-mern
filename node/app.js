import express from "express"
import cors from "cors"
//importamos la coneccion a la base de datos
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use("/blogs",blogRoutes)

try {
    await db.authenticate()
    console.log('Conexxion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexcion es: ${error}`)
    
}

//para realizar una prueba de funcionamiento
// app.get("/",(req, res) =>{
//      res.send("Hola")
// })
app.listen(8000, ()=>{
    console.log("server UP running in http://localhost:8000/")
})
