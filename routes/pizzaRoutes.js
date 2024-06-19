const express = require('express');
const pizzasController = require('../controllers/pizzaController');
const routePizzas = express.Router();

routePizzas.get('/',pizzasController.getPizzas);
routePizzas.get('/:id',pizzasController.getPizza);
routePizzas.post('/',pizzasController.createPizza);
routePizzas.put('/:id',pizzasController.editPizza);
routePizzas.delete('/:id',pizzasController.deletePizza);

module.exports = routePizzas;