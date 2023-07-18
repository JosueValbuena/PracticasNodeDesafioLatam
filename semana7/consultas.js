const pool = require('./server');

const getData = async () => { 
    const query = "SELECT * FROM productos";
    const { rows: productos } = await pool.query(query);
    return productos
}

const addData = async (nombre, stock) => {
    const query = "INSERT INTO productos VALUES (DEFAULT, $1, $2)";
    const values = [nombre, stock];
    const { rows } = await pool.query(query, values);
}

const uptadeData = async (id, nombre, stock) => {
    const query = "UPDATE productos SET nombre = $2, stock = $3 WHERE id = $1";
    const values = [id, nombre, stock];
    const consulta = await pool.query(query, values);
    if(!consulta.rowCount)
    return;
}

module.exports = {
    getData,
    addData,
    uptadeData
}