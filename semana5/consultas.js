const pool = require("./conexion.js");
const format = require('pg-format');

const obtenerMedicamentos = async ({ limits = 4, order_by = "id_ASC", page = 1 }) => {
    const [campo, direccion] = order_by.split("_");
    const offset = (page - 1) * limits;
    const formattedQuery = format("SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s OFFSET %s", campo, direccion, limits, offset);
    const { rows: medicamentos } = await pool.query(formattedQuery);
    return medicamentos;
}

const obtenerPersonal = async ({ limits = 5, order_by = "salario_ASC", page = 1 }) => {
    const [campo, direccion] = order_by.split("_");
    const offset = (page - 1) * limits;
    const formattedQuery = format("SELECT * FROM personal ORDER BY %s %s LIMIT %s OFFSET %s", campo, direccion, limits, offset);
    const { rows: personal } = await pool.query(formattedQuery);
    return personal;
}

const obtenerMedicamentosPorFiltro = async ({ stock_min, precio_max }) => {
    let filtros = [];
    const values = [];

    const agregarFiltro = (campo, comparador, valor) => {
        values.push(valor);
        const i = filtros.length;
        filtros.push(`${campo} ${comparador} $${i + 1}`);
    }

    if (precio_max) agregarFiltro('precio', '<=', precio_max);
    if (stock_min) agregarFiltro('stock', '>=', stock_min);

    let consulta = "SELECT * FROM medicamentos";
    if (filtros.length > 0) {
        filtros = filtros.join(" AND ");
        consulta += ` WHERE ${filtros}`
    }

    const { rows: medicamentos } = await pool.query(consulta, values);
    return medicamentos;
}

const prepararHATEOAS = (medicamentos) =>{
    const results = medicamentos.map((ele) => {
        return {
            name: ele.nombre,
            href: `/medicamentos/medicamentos/${ele.id}`
        }
    }).slice(0, 4);

    const total = medicamentos.length;
    const HATEOAS = {
        total,
        results
    }
    return HATEOAS;
}

module.exports = {
    obtenerMedicamentos,
    obtenerPersonal,
    obtenerMedicamentosPorFiltro,
    prepararHATEOAS
}