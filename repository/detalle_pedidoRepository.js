const pool = require('../database/conexion');

exports.getDetallePedidos = async()=>{
    try {
        const [result] = await pool.query('select * from detalle_pedido');
        console.table(result);
        console.log('resultado de la consulta: detalle de pedido');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getDetallePedido = async(id)=>{
    try {
        let query = 'select * from detalle_pedido where detalle_pedido_id = ?'
        const [result]= await pool.query(query,[id]);
        console.table(result);
        console.log('resultado de la consulta: detalle de pedido por Id.');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.createDetallePedido = async(detalle)=>{
    try {
        const {pizza_id,topping_id} = detalle;
        const query = 'insert into detalle_pedido (pizza_id,topping_id) value(?,?)';
        const [result]=await pool.query(query,[pizza_id,topping_id]);
        console.log('detalle del pedido insertado correctametne');
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.editDetallePedido = async(id, detalle)=>{
    try {
        const {pizza_id,topping_id} = detalle;
        const query = `update detalle_pedido set pizza_id = ?,topping_id = ? where detalle_pedido_id = ${id}`;
        const [result] = await pool.query(query,[pizza_id,topping_id]);
        console.log('detalle pedido editado correctamente');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteDetallePedido = async(id)=>{
    try {
        const query = 'delete from detalle_pedido where detalle_pedido_id = ?';
        const [result] = await pool.query(query,[id]);
        console.log('detalle del pedido eliminado correctamente');
    } catch (error) {
        console.log(error);
    }
}