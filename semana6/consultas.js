const pool = require("./server");
const bcrypt = require("bcryptjs");


const getUsuarios = async () => {
    const consulta = "SELECT * FROM usuarios";
    const { rows: usuarios } = await pool.query(consulta);
    return usuarios;
}

const createUser = async (email, password) => {
    const consulta = "INSERT INTO usuarios (email, password) VALUES ($1 , $2)";
    const passwordEcript = bcrypt.hashSync(password);
    password = passwordEcript;
    const values = [email, passwordEcript];
    const { rows: usuarioCreado } = await pool.query(consulta, values);
    return usuarioCreado;
}

const getEventos = async () => {
    const consulta = "SELECT * FROM eventos";
    const { rows: eventos } = await pool.query(consulta);
    return eventos
}

const createEvent = async (titulo, descripcion, fecha, lugar) => {
    const consulta = "INSERT INTO eventos (titulo, descripcion, fecha, lugar) VALUES ($1, $2, $3, $4)";
    const values = [titulo, descripcion, fecha, lugar];
    const { rows: eventoCreado } = await pool.query(consulta, values);
    return eventoCreado;
}

const verificarCredenciales = async (email, password) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE email = $1";

    const { rows:[usuario], rowCount } = await pool.query(consulta, values);

    const { password: passwordEcript } = usuario;
    const passwordCorrect = bcrypt.compareSync(password, passwordEcript);

    if(!passwordCorrect || !rowCount)
    throw { code:401, message: "email o contraseña incorrecta" };
}

module.exports = {
    getUsuarios,
    getEventos,
    verificarCredenciales,
    createUser,
    createEvent
}