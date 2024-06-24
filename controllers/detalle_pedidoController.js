const detalle_PedidoService = require('../services/detalle_pedidoService');

exports.getDetallePedidos = async(req, res)=>{
    try {
        let detalles = await detalle_PedidoService.getDetallePedidos();
        res.status(200).send(detalles);
    } catch (error) {
        res.status(500).send('error al intentar consultar los detalles de los pedidos')
    }
}

exports.getDetallePedido = async(req,res)=>{
    try {
        let detalle = await detalle_PedidoService.getDetallePedido(req.params.id);
        res.status(200).send(detalle);
    } catch (error) {
        res.status(500).send('error al intentar consultar los detalles de los pedidos')
    }
}

exports.createDetallePedido = async (req, res)=>{
    try {
        let detalle = await detalle_PedidoService.createDetallePedido(req.body);
        res.status(200).send(detalle);
    } catch (error) {
        res.status(500).send('error al crear el detalle del pedido');
    }
}

exports.editDetallePedido = async (req, res)=>{
    try {
        let id = req.params.id;
        let datos = req.body;
        let detalle = await detalle_PedidoService.editDetallePedido(id,datos);
        res.status(200).send(detalle);
    } catch (error) {
        res.status(500).send('error al editar el detalle del pedido');
    }
}

exports.deleteDetallePedido = async (req, res) =>{
    try {
        let detalle = await detalle_PedidoService.deleteDetallePedido(req.params.id);
        res.status(200).send(detalle);
    } catch (error) {
        res.status(500).send('error al borrar el detalle del pedido');
    }
}