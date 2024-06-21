const clienteService = require('../services/clienteService');

exports.getClientes = async(req, res)=>{
    try {
        let clientes = await clienteService.getClientes();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send('error al intentar mostrar datos de los clientes')
    }
}

exports.getCliente = async(req, res)=>{
    try {
        let id = req.params.id;
        let cliente = await clienteService.getCliente(id);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send(`error al consultar a al cliente por el Id: ${id}`);
    }
}

exports.createCliente = async(req, res)=>{
    try {
        let cliente = await clienteService.createCliente(req.body);
        console.log('cliente creada con exito');
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send('error al crear el cliente');
    }
}

exports.editCliente = async(req, res)=>{
    try {
        let data = req.body;
        let id = req.params.id;
        let cliente = await clienteService.editCliente(id,data);
        console.log('cliente editado con exito');
        res.status(200).send(cliente); 
    } catch (error) {
        res.status(500).send('error al editar el cliente');
    }
}

exports.deleteCliente = async(req,res)=>{
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send('Id cliente requerido');
        }
        let cliente = await clienteService.deleteCliente(id);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send('no se pudo eliminar el cliente..!')
    }
}