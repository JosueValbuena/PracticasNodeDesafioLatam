const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/router.js')

app.use(cors());
app.use(express.json());
app.use('/', router);
router.use('*', (req, res) => {
    res.send("Ruta no existe");
})

const port = process.env.PORT || 3002;

app.listen(port, ()=> console.log(`Servidor iniciado en puerto ${port}`));

module.exports = app;