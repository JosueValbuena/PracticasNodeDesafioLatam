const pool = require("./server");

const getUsuarios = async () => {
    const consulta = "SELECT * FROM usuarios";
    const { rows: usuarios } = await pool.query(consulta);
    return usuarios;
}

const getEventos = async () => {
    const consulta = "SELECT * FROM eventos";
    const { rows: eventos } = await pool.query(consulta);
    return eventos
}

module.exports = {
    getUsuarios,
    getEventos
}