const express = require('express');
const RPTController = require('../controllers/relacion_pizza_toppingController');
const routeRPT = express.Router();

routeRPT.get('/', RPTController.getRPT);

module.exports = routeRPT;