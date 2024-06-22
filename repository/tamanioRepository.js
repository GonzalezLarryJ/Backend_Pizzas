const pool = require('../database/conexion');
exports.getTamanio = async ()=>{
    try {
        const[result]=await pool.query('select * from Tamanio_Pizza');
        console.table(result);
        console.log('resultado de la consulta: tamaño de las pizzas');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.getUnTamanio = async(id)=>{
    try {
        const [result]=await pool.query(`select * from Tamanio_Pizza where tamanio_Id = ${id}`);
        console.log('tamaño seleccionado');
        console.table(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.createTamanio = async(tamanio)=>{
    try {
        const {nombreTam,descripcionTam,diametro,imagenTam, activo,fecha_crea} = tamanio;
        const query = `insert into Tamanio_Pizza(nombreTam,descripcionTam,diametro,imagenTam,activo,fecha_crea) values(?,?,?,?,?,?)`;
        const [result] = await pool.query(query,[nombreTam,descripcionTam,diametro,imagenTam,activo,fecha_crea]);
        console.log('Tamaño insertado correctamente');
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

exports.editTamanio = async(id, tamanio)=>{
    try {
        const {nombreTam,descripcionTam,diametro,imagenTam,activo,fecha_crea} = tamanio;
        const query = `update Tamanio_Pizza set nombreTam = ?,descripcionTam = ?,diametro = ?,imagenTam = ?,activo=?,fecha_crea=? where tamanio_Id = ${id}`;
        const [result] = await pool.query(query,[nombreTam,descripcionTam,diametro,imagenTam,activo,fecha_crea]);
        console.log('Tamaño editado correctamente');
        return result;
    } catch (error) {
        console.log('Error al editar tamaño de pizza', error);
    }
}

exports.deleteTamanio = async(id)=>{
    try {
        const query = 'delete from Tamanio_Pizza where tamanio_Id = ?';
        const [result] = await pool.query(query,[id]);
        console.log('Tamaño borrado correctamente..!');
        return result;
    } catch (error) {
        console.log(error);
    }
}