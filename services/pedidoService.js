const pedidoRepository = require('../repository/pedidoRepository');

exports.createPedido = (pedido)=>{
 try {
    return pedidoRepository.createPerdido(pedido);
 } catch (error) {
    console.log('error al intentar crear un pedido');
 }
}

exports.editPedido =(id,pedido)=>{
    try {
        return pedidoRepository.editPedido(id, pedido);
    } catch (error) {
        console.log('error al editar el pedido');
    }
}

exports.deletePedido =(id)=>{
    try {
        return pedidoRepository.deletePedido(id);
    } catch (error) {
        console.log('error al borrar pedido');
    }
}

exports.getPedidos = () =>{
    try {
        return pedidoRepository.getPedidos();
    } catch (error) {
        console.log('Error al consultar los pedidos');
    }
}

exports.getPedido = (id)=>{
    try {
        return pedidoRepository.getPedido(id);
    } catch (error) {
        console.log('error al consultar pedidos por Id');
    }
}