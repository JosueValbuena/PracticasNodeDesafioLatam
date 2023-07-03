const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "farmacia",
    password: "postgres",
    allowExitOnIdle: true
});

module.exports = pool;