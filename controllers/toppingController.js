const toppingService = require('../services/toppingService');

exports.getTopping =async(req, res)=>{
    try {
        let topping = await toppingService.getTopping();
        res.status(200).send(topping);
    } catch (error) {
        res.status(500).send('error al intentar mostrar datos de los toppings de pizzas');
    }
}

exports.getOneTopping = async(req, res)=>{
    try {
        let topping = await toppingService.getOneTopping(req.params.id)
        res.status(200).send(topping);
    } catch (error) {
        res.status(500).send('error al consultar el registro');
    }
}

exports.createTopping = async(req,res)=>{
    try {
        let topping = await toppingService.createTopping(req.body);
        res.status(200).send(topping);
    } catch (error) {
        res.status(500).send('error al crear el topping');
    }
}

exports.editTopping = async (req, res)=>{
    try {
        let data = req.body;
        let id = req.params.id;
        let topping = await toppingService.editTopping(id,data);
        res.status(200).send(topping);
    } catch (error) {
        res.status(500).send('error al editar topping');
    }
}

exports.deleteTopping = async(req, res)=>{
    try {
        let id = req.params.id;
        let borrado = await toppingService.deleteTopping(id);
        res.status(200).send(borrado);
    } catch (error) {
        res.status(500).send('error al borrar registro');
    }
}