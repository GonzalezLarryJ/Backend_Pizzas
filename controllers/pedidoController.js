const pedidoService = require('../services/pedidoService');

exports.createPedido = async(req, res)=>{
    try {
        const pedido = await pedidoService.createPedido(req.body);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send('No se pudo insertar el pedido');
    }
}

exports.editPedido = async(req, res)=>{
    try {
        let id = req.params.id;
        let datos = req.body;
        let pedido = await pedidoService.editPedido(id, datos);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(200).send(`No se puede editar el pedido ${error}`);
    }
}

exports.deletePedido = async(req, res)=>{
    const id = req.params.id;
    try {
        let pedido = await pedidoService.deletePedido(id);
        res.status(200).send(pedido);
    } catch (error) {
        console.log(error);
    }
}

exports.getPedidos = async (req, res) =>{
    try {
        let pedidios = await pedidoService.getPedidos();
        res.status(200).send(pedidios);
    } catch (error) {
        res.status(500).send('error al consultar los pedidos')
    }
}

exports.getPedido = async (req, res)=>{
    try {
        let id = req.params.id;
        let pedido = await pedidoService.getPedido(id);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send('error al consultar al pedido por Id')
    }
}