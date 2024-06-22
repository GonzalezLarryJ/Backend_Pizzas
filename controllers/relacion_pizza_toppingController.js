const RPTService = require('../services/relacion_pizza_toppingService');

exports.getRPT = async(req, res) =>{
    try {
        let relacion = await RPTService.getRPT();
        res.status(200).send(relacion);
    } catch (error) {
        res.status(500).send('error al intentar mostrar datos de la relación entre pizza y topping')
    }
}

exports.getOneRPT = async(req, res)=>{
    try {
        let id = req.params.id;
        if (!id) {
            res.status(404).send('error al verificar Id');
        }
        let relacion = await RPTService.getOneRPT(id);
        res.status(200).send(relacion);
    } catch (error) {
        res.status(500).send('error al intentar consultar la relación por Id');
    }
}

exports.createRPT = async(req, res)=>{
    try {
        const relacion = await RPTService.createRPT(req.body);
        res.status(200).send(relacion);
    } catch (error) {
        res.status(500).send('error al crear una relación')
    }
}

exports.editRPT = async(req, res)=>{
    try {
        let id = req.params.id;
        let datos = req.body;
        let relacion = await RPTService.updateRPT(id, datos);
        res.status(200).send(relacion); 
    } catch (error) {
        res.status(500).send('error al editar una relación');
    }
}

exports.deleteRPT = async(req, res)=>{
    try {
        let relacion = await RPTService.borrarRPT(req.params.id);
        res.status(200).send(relacion);
    } catch (error) {
        res.status(500).send('error al borrar relación')
    }
} 