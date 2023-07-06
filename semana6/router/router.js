const express = require("express");
const router = express.Router();
const { getUsuarios, getEventos } = require("../consultas");

router.get("/", (req, res) => {
    res.send("Hola desde express")
})

router.get("/usuarios", async (req, res) => {
    const usuarios = await getUsuarios();
    res.json(usuarios);
})

router.get("/eventos", async (req, res) => {
    const eventos = await getEventos();
    res.json(eventos);
})

module.exports = router;