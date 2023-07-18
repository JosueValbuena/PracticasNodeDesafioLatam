const { Pool } = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'pruebafinal',
    password: 'postgres',
    allowExitOnIdle: true
})

module.exports = pool;