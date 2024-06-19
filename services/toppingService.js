const toppingRepository = require('../repository/toppingRepository');

exports.getTopping =()=>{
    try {
        return toppingRepository.getTopping();
    } catch (error) {
        console.log(`hay un error en la consulta: ${error}`);
    }
}

exports.getOneTopping =(id)=>{
    try {
        return toppingRepository.getOneTopping(id);
        
    } catch (error) {
        console.log(error);
    }
}

exports.createTopping = (topping)=>{
    try {
        return toppingRepository.createTopping(topping);
    } catch (error) {
        console.log(error);
    }
}

exports.editTopping = (id, topping)=>{
    try {
        return toppingRepository.editTopping(id,topping);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTopping = (id)=>{
    try {
        return toppingRepository.deleteTopping(id);
    } catch (error) {
        console.log(error);
    }
}