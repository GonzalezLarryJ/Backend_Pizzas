const express = require('express');
const tamanioController = require('../controllers/tamanioController');
const routeTamanio = express.Router();

routeTamanio.get('/filtros',tamanioController.filtrado);
routeTamanio.get('/',tamanioController.getTamanio);
routeTamanio.get('/:id',tamanioController.getUnTamanio);
routeTamanio.post('/',tamanioController.createTamanio);
routeTamanio.put('/:id',tamanioController.editTamanio);
routeTamanio.delete('/:id',tamanioController.deleteTamanio);

module.exports = routeTamanio;