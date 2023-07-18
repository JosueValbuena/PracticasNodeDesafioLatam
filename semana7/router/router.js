const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getData, addData } = require('../consultas');

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
        const {nombre, stock} = req.body;
        const producto = await addData(nombre, stock);
        res.status(200).json({mesaje: "solicitud recibida correctamente", data:req.body})   
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;