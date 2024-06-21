const express = require('express');
const clienteController = require('../controllers/clienteController');
const routeCliente = express.Router();

routeCliente.get('/',clienteController.getClientes);
routeCliente.get('/:id',clienteController.getCliente);
routeCliente.post('/',clienteController.createCliente);
routeCliente.put('/:id',clienteController.editCliente);
routeCliente.delete('/:id',clienteController.deleteCliente);

module.exports = routeCliente;