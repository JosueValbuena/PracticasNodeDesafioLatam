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

const verificarCredenciales = async (email, password) => {
    const consulta = "SELECT * FROM usuarios WHERE email = $1 AND password = $2";
    const values = [email, password];
    const { rowCount } = await pool.query(consulta, values);
    if (!rowCount)
        throw { code: 404, message: "Usuario no encontrado" }
}

module.exports = {
    getUsuarios,
    getEventos,
    verificarCredenciales
}