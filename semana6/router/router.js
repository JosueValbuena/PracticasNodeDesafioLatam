const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { getUsuarios, getEventos, verificarCredenciales } = require("../consultas");

router.use(cors());
router.use(express.json());

router.get("/", (req, res) => {
    res.send("Hola desde express")
})

router.get("/usuarios", async (req, res) => {
    const usuarios = await getUsuarios();
    res.json(usuarios);
})

router.get("/eventos", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY);
        const eventos = await getEventos();
        res.json(eventos);
    } catch (error) {
        res.status(error.code || 500).json({message: "usuario no autorizado"});
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        await verificarCredenciales(email, password);
        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.send(token);
        console.log("usuario autenticado correctamente");
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).send(error)
    }
})

router.delete("/eventos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        console.log(token)
    } catch (error) {
        res.status(error.code || 500).send(error);
    }
})

router.get("*", (req, res) => {
    res.send("Pagina no encontrada")
})

module.exports = router;