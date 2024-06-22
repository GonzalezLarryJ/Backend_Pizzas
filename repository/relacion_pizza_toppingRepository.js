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

exports.createRPT = async(relacion)=>{
    try {
        const {id_pizza, id_topping} = relacion;
        const query = 'insert into pizza_topping_rel (id_pizza, id_topping) value (?,?)'
        const [result]=await pool.query(query,[id_pizza, id_topping]);
        console.log('Relación creada correctamente');
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.editRPT = async(id,relacion)=>{
    try {
        const {id_pizza, id_topping} = relacion;
        const query = `update pizza_topping_rel set id_pizza = ?, id_topping= ? where id = ${id}`;
        const [result]=await pool.query(query,[id_pizza, id_topping]);
        console.log('relación editada con exito');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.delRPT =async(id)=>{
    try {
        const query = `delete from pizza_topping_rel where id = ${id}`;
    const [result] = await pool.query(query);
    console.log('ralación borrada con exito');
    return result;
    } catch (error) {
        console.log(error);
    }
}