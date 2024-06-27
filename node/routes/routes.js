//buscar sobre las apis res, como funcionan uy como se pueden crear
// Importamos el módulo 'express'
import express from 'express'

// Importamos las funciones del controlador de blogs
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'

// Creamos un nuevo enrutador de Express
const router = express.Router()

// Definimos las rutas para los blogs
// Cuando se realiza una solicitud GET a la ruta base ('/'), llamamos a la función 'getAllBlogs'
router.get('/', getAllBlogs)

// Cuando se realiza una solicitud GET a una ruta con un ID específico (como '/123'), llamamos a la función 'getBlog'
router.get('/:id', getBlog)

// Cuando se realiza una solicitud POST a la ruta base ('/'), llamamos a la función 'createBlog'
router.post('/', createBlog)

// Cuando se realiza una solicitud PUT a una ruta con un ID específico (como '/123'), llamamos a la función 'updateBlog'
router.put('/:id', updateBlog)

// Cuando se realiza una solicitud DELETE a una ruta con un ID específico (como '/123'), llamamos a la función 'deleteBlog'
router.delete('/:id', deleteBlog)

// Exportamos el enrutador para que pueda ser utilizado por otros módulos
export default router

