const pool = require('../database/conexion');
exports.getClientes = async()=>{
    try {
        const [result]= await pool.query('select * from Cliente');
        console.table(result);
        console.log('resultado de la consulta: Clientes');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getCliente = async(id)=>{
    try {
        let query = 'select * from Cliente where id = ?'
        const [result]= await pool.query(query,[id]);
        console.table(result);
        console.log('resultado de la consulta: cliente');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.createCliente = async(cliente)=>{
    try {
        const {nombre,apellido,direccion,telefono,email} = cliente;
        const query = 'insert into Cliente (nombre,apellido,direccion,telefono,email) value (?,?,?,?,?)';
        const [result]= await pool.query(query,[nombre,apellido,direccion,telefono,email]);
        console.log('cliente insrtado correctamente');
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.editCliente = async(id, cliente)=>{
    try {
        const {nombre,apellido,direccion,telefono,email} = cliente;
        const query = `update Cliente set nombre =?,apellido =?,direccion =?,telefono =?,email =? where id = ${id}`
        const [result]=await pool.query(query,[nombre,apellido,direccion,telefono,email]);
        console.log('cliente editado correctamente');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCliente = async(id)=>{
    try {
        const query = 'delete from Cliente where id = ?';
        const [result] = await pool.query(query,[id]);
        console.log('cliente borrado correctamente');
        return result;
    } catch (error) {
        console.log(error);
    }
}