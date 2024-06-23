const express = require('express');
const pedidoController = require('../controllers/pedidoController');
const routePedido = express.Router();

routePedido.post('/',pedidoController.createPedido);
routePedido.put('/:id',pedidoController.editPedido);
routePedido.delete('/:id',pedidoController.deletePedido);
routePedido.get('/',pedidoController.getPedidos);
routePedido.get('/:id',pedidoController.getPedido);

module.exports = routePedido;