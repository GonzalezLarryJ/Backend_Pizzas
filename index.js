const express = require('express');
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const routeTamanio = require('./routes/tamanioRoutes');
const routeTopping = require('./routes/toppingRoutes');
const routePizza = require('./routes/pizzaRoutes');
const routeCliente = require('./routes/clienteRoutes');

//middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/tamanio',routeTamanio);
app.use('/api/topping',routeTopping);
app.use('/api/pizza',routePizza);
app.use('/api/cliente',routeCliente);

app.get('/',(req,res)=>{
    res.send('Hola, mundo...!')
});
//route, manejo de errores
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('algo salio mal....!');
});


//Inicio del servidor
app.listen(port, ()=>{
    console.log(`Servidor en ejecución en el puerto: http://localhost:${port}/`);
});