const express = require("express");
const router = express.Router();

const { obtenerMedicamentos, obtenerPersonal, obtenerMedicamentosPorFiltro } = require("../consultas.js");

router.get("/", (req, res) => {
    res.send("hola desde express");
})

router.get("/medicamentos", async (req, res) => {
    const queryString = req.query;
    const resultado = await obtenerMedicamentos(queryString);
    res.json(resultado);
})

router.get("/personal", async (req, res) => {
    const queryString = req.query;
    const resultado = await obtenerPersonal(queryString);
    res.json(resultado);
})

router.get("/medicamentos/filtros", async (req, res) => {
    const queryString = req.query;
    const resultado = await obtenerMedicamentosPorFiltro(queryString);
    res.json(resultado);
})

module.exports = router;