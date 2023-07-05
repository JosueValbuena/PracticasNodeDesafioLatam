const pool = require("./server");

const getUsuarios = async () => {
    const consulta = "SELECT * FROM usuarios";
    const { rows: usuarios } = await pool.query(consulta);
    return usuarios;
}

module.exports = {
    getUsuarios,
}