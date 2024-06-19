const pizzaService = require('../services/pizzaService');

exports.getPizzas = async(req, res)=>{
    try {
        let pizzas = await pizzaService.getPizzas();
        res.status(200).send(pizzas);
    } catch (error) {
        res.status(500).send('error al intentgar mostrar datos de pizzas')
    }
}

exports.getPizza = async(req, res)=>{
    try {
        let pizza = await pizzaService.getPizza(req.params.id);
        if (!pizza) {
            console.log('pizza no encontrada');
            res.status(404).send('pizza no encontrada');
        }
        res.status(200).send(pizza);
    } catch (error) {
        res.status(500).send('error al consultar el registro');
    }
}

exports.createPizza = async(req, res)=>{
    try {
        let pizza = await pizzaService.createPizza(req.body);
        console.log('pizza creada con exito');
        res.status(200).send(pizza);
    } catch (error) {
        res.status(500).send('error al crear el registro');
    }
}

exports.editPizza = async(req, res)=>{
    try {
        let id = req.params.id;
        let data = req.body;
        let pizza = await pizzaService.editPizza(id,data);
        console.log('Pizza editada con exito');
        res.status(200).send(pizza);
    } catch (error) {
        res.status(500).send('error al editar el registro')
    }
}

exports.deletePizza = async(req, res)=>{
    try {
        let id = req.params.id;
        let pizza = await pizzaService.deletePizza(id);
        console.log('pizza borrada con exito');
        res.status(200).send(pizza);
    } catch (error) {
        res.status(500).send('error al eliminar registro');
    }
}