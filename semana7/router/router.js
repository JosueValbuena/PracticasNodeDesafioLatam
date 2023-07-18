const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getData, addData, uptadeData } = require('../consultas');

router.use(express.json());

router.get('/', (req, res) => {
    try {
        res.send("Hola desde Express");
    } catch (error) {
        console.log(error);
    }
})

router.get("/productos", async (req, res) => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        res.send(error)
    }
})

router.post("/productos", async (req, res) => {
    try {
        const { nombre, stock } = req.body;
        await addData(nombre, stock);
        res.json([{ nombre, stock }])
    } catch (error) {
        res.send(error);
    }
})

router.put("/productos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, stock } = req.body;
        const dataAct = await uptadeData(id, nombre, stock);
        res.json({id, data: dataAct})
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;