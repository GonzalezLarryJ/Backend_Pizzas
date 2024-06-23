const pool =  require('../database/conexion');

exports.createPerdido = async(pedido)=>{
    try {
        const {fecha, cliente_nombre,telefono, email, direccion,subTotal, impuesto, total,detalle_pedido_Id}= pedido;
        const query = 'insert into Pedido (fecha, cliente_nombre,telefono, email, direccion,subTotal, impuesto, total,detalle_pedido_Id) values(?,?,?,?,?,?,?,?,?)';
        const [result] = await pool.query(query,[fecha, cliente_nombre,telefono, email, direccion,subTotal, impuesto, total,detalle_pedido_Id]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.editPedido = async(id, pedido)=>{
    try {
        const {fecha, cliente_nombre,telefono, email, direccion,subTotal, impuesto, total,detalle_pedido_Id}= pedido;
        const query = `update Pedido set fecha=?, cliente_nombre=?,telefono=?, email=?, direccion=?,subTotal=?, impuesto=?, total=?,detalle_pedido_Id=? where pedido_Id = ${id}`;
        const [result] = await pool.query(query,[fecha, cliente_nombre,telefono, email, direccion,subTotal, impuesto, total,detalle_pedido_Id]);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.deletePedido = async(id)=>{
    try {
        const query = 'delete from Pedido where pedido_Id = ?'
        const [result]= await pool.query(query,[id]);
        console.log('Pedido borrado correctamente');
    } catch (error) {
        console.log(error);
    }
}

exports.getPedidos = async()=>{
    try {
        const [result]= await pool.query('select * from Pedido');
        console.log(result);
        console.log('resultado de la consulta: Pedidos');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getPedido = async(id)=>{
    try {
        let query = 'select * from Pedido where pedido_Id = ?';
        const [result] = await pool.query(query,[id]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}