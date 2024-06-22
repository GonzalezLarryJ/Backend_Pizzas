const pool = require('../database/conexion');
exports.getRPT = async()=>{
    try {
        const [result]=await pool.query('select * from pizza_topping_rel');
        console.table(result);
        console.log('resultados de la consulta: relación pizza y tamaño');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getOneRPT = async(id)=>{
    try {
        let query = 'select * from pizza_topping_rel where id = ?'
        let[result]=await pool.query(query,[id]);
        console.log(result);
        return result;  
    } catch (error) {
        console.log(error);
    }
}