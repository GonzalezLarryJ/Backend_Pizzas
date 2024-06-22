const RPTRepository = require('../repository/relacion_pizza_toppingRepository');

exports.getRPT = ()=>{
    try {
        return RPTRepository.getRPT();
    } catch (error) {
        console.log(`veamos donde esta el error: ${error}`);
    }
}