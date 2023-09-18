const {response} = require('express')

//Importación de los modelos
const Permiso = require('../models/usuario')

//Método GET de la API

const permisoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los permisos
    const permisos = await permisos.find()

    res.json({  //Respuesta en JSON
        permisos
    })   
}

/*
const permisoGet = async (req, res = response) => {
    const { id } = req.params; // Obtener el ID de los parámetros de la URL

    try {
        // Consultar un permiso por ID
        const permiso = await Permiso.findById(id);

        if (!permiso) {
            return res.status(404).json({ mensaje: 'Permiso no encontrado' });
        }

        res.json({ permiso });
    } catch (error) {
        console.error('Error al consultar el permiso:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
*/

//Método POST de la api
const permisoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query //Captura de atributos
    try {
        const permiso = new Permiso(body) //Instanciando el objeto
        await permiso.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const permisoPut = async(req, res = response) => {

    const {ID, nombre, modulo} = req.query
    let mensaje = 'Modificación exitosa'
    try{
         await Permiso.findOneAndUpdate({ID: ID}, 
            {nombre: nombre, modulo:modulo})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}





module.exports = {
    permisoGet,
    permisoPost,
    permisoPut
}