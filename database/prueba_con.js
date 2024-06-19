const pool = require('./conexion')

const getEstudiantes = async  ()=>{
    try {
        const [result] = await pool.query("SELECT * FROM Tamanio_Pizza");
        console.table(result);
        console.log('tamaño de pizza listados');
    } catch (error) {
        console.log(error);
    }
};

//getEstudiantes();
module.exports = getEstudiantes;