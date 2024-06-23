const detalle_pedidoRepository = require('../repository/detalle_pedidoRepository');

exports.getDetallePedidos = () =>{
    try {
        return detalle_pedidoRepository.getDetallePedidos();
    } catch (error) {
        console.log('error al consultar los detalles de los pedidos');
    }
}

exports.getDetallePedido = (id)=>{
    try {
        return detalle_pedidoRepository.getDetallePedido();
    } catch (error) {
        console.log('error al consultar los detalles de los pedidos');
    }
}

exports.createDetallePedido =(detalle)=>{
    try {
        return detalle_pedidoRepository.createDetallePedido(detalle);
    } catch (error) {
        console.log('error al consultar el detalle del pedido');
    }
}

exports.editDetallePedido = (id,detalle)=>{
    try {
        return detalle_pedidoRepository.editDetallePedido(id,detalle);
    } catch (error) {
        console.log('error al editar el detalle del pedido');
    }
}

exports.deleteDetallePedido = (id)=>{
    try {
        return detalle_pedidoRepository.deleteDetallePedido(id);
    } catch (error) {
        console.log('error al borrar el detalle del pedido');
    }
}