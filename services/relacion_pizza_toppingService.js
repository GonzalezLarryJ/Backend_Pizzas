const RPTRepository = require('../repository/relacion_pizza_toppingRepository');

exports.getRPT = ()=>{
    try {
        return RPTRepository.getRPT();
    } catch (error) {
        console.log(`veamos donde esta el error: ${error}`);
    }
}

exports.getOneRPT = (id)=>{
    try {
        return RPTRepository.getOneRPT(id)
    } catch (error) {
        console.log(`error al consultar relación: ${error}`);
    }
}

exports.createRPT = (relacion)=>{
    try {
        return RPTRepository.createRPT(relacion);
    } catch (error) {
        console.log(`error al crear relación: ${error}`);
    }
}

exports.updateRPT = (id, relacion)=>{
    try {
        return RPTRepository.editRPT(id, relacion);
    } catch (error) {
        console.log(`error al editar la relacion:${error}`);
    }
}

exports.borrarRPT = (id)=>{
    try {
        return RPTRepository.delRPT(id);
    } catch (error) {
        console.log('error al borrar la relación');
    }
}