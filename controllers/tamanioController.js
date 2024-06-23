const { query } = require('../database/conexion');
const tamanioService = require('../services/tamanioService');

exports.getTamanio = async(req, res)=>{
    try {
        let tamanio = await tamanioService.getTamanio();
        res.status(200).send(tamanio);
    } catch (error) {
        res.status(500).send('error al intentar mostrar datos de tamaño pizzas')
    }
}

exports.getUnTamanio = async(req,res)=>{
    const id = req.params.id;
    try {
        let tamanio = await tamanioService.getUnTamanio(id);
        res.status(200).send(tamanio);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al itentar mostrar el registro')
    }
}

exports.createTamanio = async(req, res)=>{
    try {
       const tamanio = await tamanioService.createTamanio(req.body);
        res.status(200).send(tamanio);
    } catch (error) {
        res.status(500).send('No se pudo insertar el registro');
    }
}

exports.editTamanio = async(req, res)=>{
    try {
        let id = req.params.id;
        let datos = req.body;
        let tamanio = await tamanioService.editTamanio(id, datos);
        res.status(200).send(tamanio);
    } catch (error) {
        res.status(500).send(`No se pudo editar el tamaño ${error}`);
    }
}

exports.deleteTamanio = async(req, res)=>{
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send('Id es requerido');
        }
        let tamanio = await tamanioService.deleteTamanio(id);
        res.status(200).send(tamanio);
    } catch (error) {
        console.log(error);
        res.status(500).send('No se pudo eliminar el registro')
    }
}