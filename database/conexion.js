const dotenv = require('dotenv');
const {createPool} = require ('mysql2/promise');

dotenv.config();
host = process.env.db_host;
port = process.env.db_port;
database = process.env.db_name;
user = process.env.db_user;
password = process.env.db_password;

const pool = createPool({
    host,
    port,
    database,
    user,
    password
});

console.log('Base de datos conectada');
module.exports = pool;