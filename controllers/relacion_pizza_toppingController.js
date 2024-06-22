const RPTService = require('../services/relacion_pizza_toppingService');

exports.getRPT = async(req, res) =>{
    try {
        let relacion = await RPTService.getRPT();
        res.status(200).send(relacion);
    } catch (error) {
        res.status(500).send('error al intentar mostrar datos de la relación entre pizza y topping')
    }
}
