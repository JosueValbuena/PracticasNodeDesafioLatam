const express = require("express");
const router = express.Router();
const { getUsuarios } = require("../consultas");

router.get("/", (req, res) => {
    res.send("Hola desde express")
})

router.get("/usuarios", async (req, res) => {
    const usuarios = await getUsuarios();
    res.json(usuarios);
})

module.exports = router;