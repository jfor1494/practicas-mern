// importamos el modelo
import BlogModel from "../models/BlogModel.js";

//-------metodos para el CRUD---------
//mostrar todos los registros

    // Exportamos una función asíncrona llamada 'getAllBlogs'
export const getAllBlogs = async (req, res) => {
    try {
        // Intentamos obtener todos los blogs de la base de datos
        // 'BlogModel.findAll()' es una función de Sequelize que obtiene todos los registros de la tabla 'Blog'
        const blogs = await BlogModel.findAll()

        // Si la operación es exitosa, enviamos los blogs como respuesta en formato JSON
        res.json(blogs)
    } catch (error) {
        // Si ocurre algún error durante la operación, capturamos el error y enviamos un mensaje de error como respuesta en formato JSON
        res.json({message: error.message})
    }
}

//mostrar un registro
// Exportamos una función asíncrona llamada 'getBlog'
export const getBlog = async (req, res) => {
    try {
        // Intentamos obtener un blog específico de la base de datos
        // 'BlogModel.findAll()' es una función de Sequelize que obtiene todos los registros de la tabla 'Blog' que cumplen con una condición específica
        // En este caso, la condición es que el 'id' del blog sea igual al 'id' proporcionado en los parámetros de la solicitud (req.params.id)
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        })

        // Si la operación es exitosa, enviamos el blog como respuesta en formato JSON
        res.json(blog[0])
    } catch (error) {
        // Si ocurre algún error durante la operación, capturamos el error y enviamos un mensaje de error como respuesta en formato JSON
        res.json({ message: error.message })
    }
}

//crear un registro
// Exportamos una función asíncrona llamada 'createBlog'
export const createBlog = async (req, res) => {
    try {
        // Intentamos crear un nuevo blog en la base de datos
        // 'BlogModel.create(req.body)' es una función de Sequelize que crea un nuevo registro en la tabla 'Blog'
        // 'req.body' contiene los datos del nuevo blog que se enviarán en el cuerpo de la solicitud HTTP
        await BlogModel.create(req.body)

        // Si la operación es exitosa, enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({
            "message": "!Registro creado correctamente!"
        })
    } catch (error) {
        // Si ocurre algún error durante la operación, capturamos el error y enviamos un mensaje de error como respuesta en formato JSON
        res.json({ message: error.message })   
    }
}

//actualizar un registro
// Exportamos una función asíncrona llamada 'updateBlog'
export const updateBlog = async (req, res) => {
    try {
        // Intentamos actualizar un blog existente en la base de datos
        // 'BlogModel.update(req.body, { where: {id: req.params.id} })' es una función de Sequelize que actualiza un registro en la tabla 'Blog'
        // 'req.body' contiene los nuevos datos del blog que se enviarán en el cuerpo de la solicitud HTTP
        // '{ where: {id: req.params.id} }' es la condición que especifica qué blog actualizar (el blog cuyo 'id' coincide con 'req.params.id')
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })

        // Si la operación es exitosa, enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({
            "message": "!Registro actualizado correctamente!"
        })
    } catch (error) {
        // Si ocurre algún error durante la operación, capturamos el error y enviamos un mensaje de error como respuesta en formato JSON
        res.json({ message: error.message })
    }
}

//eliminar un registro
// Exportamos una función asíncrona llamada 'deleteBlog'
export const deleteBlog = async(req, res) => {
    try {
        // Intentamos eliminar un blog existente en la base de datos
        // 'BlogModel.destroy({ where: { id: req.params.id } })' es una función de Sequelize que elimina un registro en la tabla 'Blog'
        // '{ where: { id: req.params.id } }' es la condición que especifica qué blog eliminar (el blog cuyo 'id' coincide con 'req.params.id')
        await BlogModel.destroy({
            where: { id: req.params.id }
        })

        // Si la operación es exitosa, enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({
            "message": "!Registro eliminado correctamente!"
        })
    } catch (error) {
        // Si ocurre algún error durante la operación, capturamos el error y enviamos un mensaje de error como respuesta en formato JSON
        res.json({ message: error.message })
    }
}





