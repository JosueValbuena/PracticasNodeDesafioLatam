const pool = require('./server');

const getData = async () => { 
    const query = "SELECT * FROM productos";
    const { rows: productos } = await pool.query(query);
    return productos
}

const addData = async (nombre, stock) => {
    const query = "INSERT INTO productos VALUES (DEFAULT, $1, $2)";
    const values = [nombre, stock];
    const { rows:productoAgregado } = await pool.query(query, values);
    console.log(query);
    console.log(values);
    console.log(productoAgregado);
    return productoAgregado;
}

module.exports = {
    getData,
    addData
}