const express = require('express');
const RPTController = require('../controllers/relacion_pizza_toppingController');
const routeRPT = express.Router();

routeRPT.get('/', RPTController.getRPT);
routeRPT.get('/:id',RPTController.getOneRPT);
routeRPT.post('/',RPTController.createRPT);
routeRPT.put('/:id',RPTController.editRPT);
routeRPT.delete('/:id',RPTController.deleteRPT);

module.exports = routeRPT;