const express = require('express');
const toppingController = require('../controllers/toppingController');

const routeTopping = express.Router();

routeTopping.get('/',toppingController.getTopping);
routeTopping.get('/:id',toppingController.getOneTopping);
routeTopping.post('/',toppingController.createTopping);
routeTopping.put('/:id',toppingController.editTopping);
routeTopping.delete('/:id',toppingController.deleteTopping);

module.exports = routeTopping;