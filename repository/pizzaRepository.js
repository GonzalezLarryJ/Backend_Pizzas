const pool = require('../database/conexion');
exports.getPizzas = async()=>{
    try {
        const [result]= await pool.query('select * from Pizza');
        console.table(result);
        console.log('resultado de la cosulta: Pizzas');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getPizza = async(id)=>{
    try {
        let query = 'select * from Pizza where idPizza = ?';
        let [result] = await pool.query(query,[id]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.createPizza = async(pizza)=>{
    try {
        const{Imagen,Nombre,Descripcion,Precio,tamanio_id,fecha_creada}=pizza;
        const query = 'insert into Pizza (Imagen,Nombre,Descripcion,Precio,tamanio_id,fecha_creada) value (?,?,?,?,?,?)';
        const [result] = await pool.query(query,[Imagen,Nombre,Descripcion,Precio,tamanio_id,fecha_creada]);
        console.log('Pizza insertada correctamente');
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.editPizza = async(id, pizza)=>{
    try {
        const{Imagen,Nombre,Descripcion,Precio,tamanio_id,fecha_creada}= pizza;
        const query = `update Pizza set Imagen = ?,Nombre = ?,Descripcion = ?,Precio = ?,tamanio_id = ?,fecha_creada=? where idPizza = ${id}`;
        const [result] = await pool.query(query,[Imagen,Nombre,Descripcion,Precio,tamanio_id,fecha_creada]);
        console.log('Pizza editada correctamente');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.deletePizza = async(id)=>{
    try {
        const query = 'delete from Pizza where idPizza = ?';
        const [result]=await pool.query(query,[id]);
        console.log('Pizza borrada correctamente');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.filtrado = async(consulta)=>{
    try {
        console.log(consulta);
        const [result] = await pool.query(consulta);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Error en el repositorio de filtrado');
    }
}
