const pool = require('../database/conexion');

exports.getTopping = async()=>{
    try {
        const [result] = await pool.query('select * from Topping_Pizza');
        console.log(result);
        console.log('Resultado de la consulta: Topping de las pizzas');
        return result
    } catch (error) {
        console.log(error);
    }
}

exports.getOneTopping = async (id)=>{
    try {
        const [result] = await pool.query(`select * from Topping_Pizza where topping_id = ${id}`);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
} 

exports.createTopping = async(topping)=>{
    try {
        const{nombreT,descripcionT,imagenT,precio}=topping;
        const query = `insert into Topping_Pizza(nombreT,descripcionT,imagenT,precio)values(?,?,?,?)`;
        const [result]=await pool.query(query,[nombreT,descripcionT,imagenT,precio]);
        console.log('Topping insertado correctamente');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

exports.editTopping = async (id, topping)=>{
    try {
        const {nombreT,descripcionT,imagenT,precio}=topping;
        const query = `update Topping_Pizza set nombreT=?,descripcionT=?,imagenT=?,precio=? where topping_id = ${id}`
        const [result]= await pool.query(query,[nombreT,descripcionT,imagenT,precio]);
        console.log('Topping editado correctamente');
        return result;
    } catch (error) {
        console.log('error al editar el topping',error);
    }
}

exports.deleteTopping = async(id)=>{
    try {
        const query = `delete from Topping_Pizza where topping_id = ?`;
        const [result] = await pool.query(query,[id]);
        console.log('registro borrado con exito');
        return result;
    } catch (error) {
        console.log('error al borrar registro');
    }
}

