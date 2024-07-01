const tamanioRepository = require('../repository/tamanioRepository');


exports.getTamanio = ()=>{
    try {
        return tamanioRepository.getTamanio();
    } catch (error) {
        console.log(`veamos donde esta el error ${error}`);
    }
}

exports.getUnTamanio = (id)=>{
    try {
        return tamanioRepository.getUnTamanio(id);
    } catch (error) {
        console.log(error);
    }
}

exports.createTamanio =(tamanio)=>{
    try {
        return tamanioRepository.createTamanio(tamanio);
    } catch (error) {
        console.log(error);
    }
}

exports.editTamanio =(id, tamanio)=>{
    try {
        return tamanioRepository.editTamanio(id,tamanio);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTamanio =(id)=>{
    try {
        return tamanioRepository.deleteTamanio(id);
    } catch (error) {
        console.log(error);
    }
}


exports.filtado = async (consulta) => {
        try {
            console.log(`esta es la consulta que se recibe en el service: ${consulta}`);
            let query = 'SELECT * FROM Tamanio_Pizza';
       
            if (consulta && consulta.trim() !== '') {
                query += ` ${consulta}`;
            } 

            const result = await tamanioRepository.filtrado(query);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error en el servicio de filtrado');
        }
}