const clienteRepository = require('../repository/clienteRepository');

exports.getClientes =()=>{
    try {
        return clienteRepository.getClientes();
    } catch (error) {
        console.log('error al consultar los clientes');
    }
}

exports.getCliente =(id)=>{
    try {
        return clienteRepository.getCliente(id);
    } catch (error) {
        console.log('error al consultar el cliente por Id');
    }
}

exports.createCliente = (cliente)=>{
    try {
        return clienteRepository.createCliente(cliente);
    } catch (error) {
        console.log('error al crear el cliente');
    }
}

exports.editCliente = (id, cliente)=>{
    try {
        return clienteRepository.editCliente(id,cliente);
    } catch (error) {
        console.log('error al editar cliente');
    }
}

exports.deleteCliente = (id)=>{
    try {
        return clienteRepository.deleteCliente(id);
    } catch (error) {
        console.log('error al borrar cliente service');
    }
}