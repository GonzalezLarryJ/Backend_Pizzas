const pizzaRepository = require('../repository/pizzaRepository');

exports.getPizzas =()=>{
    try {
        return pizzaRepository.getPizzas();
    } catch (error) {
        console.log('error al consultar datos');
    }
}

exports.getPizza =(id)=>{
    try {
        return pizzaRepository.getPizza(id)
    } catch (error) {
        console.log('error al consultar el registro');
    }
}

exports.createPizza = (pizza)=>{
    try {
        return pizzaRepository.createPizza(pizza);
    } catch (error) {
        console.log('error en la creación de una pizza');
    }
}

exports.editPizza = (id, pizza)=>{
    try {
        return pizzaRepository.editPizza(id, pizza);
    } catch (error) {
        console.log('error al editar la pizza');
    }
}

exports.deletePizza = (id)=>{
    try {
        return pizzaRepository.deletePizza(id);
    } catch (error) {
        console.log('error al borrar la pizza');
    }
}