const express = require('express');
const detallePedidoController = require('../controllers/detalle_pedidoController');

const routeDetallePedidos = express.Router();

routeDetallePedidos.get('/',detallePedidoController.getDetallePedidos);
routeDetallePedidos.get('/:id',detallePedidoController.getDetallePedido);
routeDetallePedidos.post('/',detallePedidoController.createDetallePedido);
routeDetallePedidos.put('/:id',detallePedidoController.editDetallePedido);
routeDetallePedidos.delete('/:id',detallePedidoController.deleteDetallePedido);

module.exports = routeDetallePedidos;