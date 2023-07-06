const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router.js");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => console.log(`Servidor iniciado correctamente en el puerto ${port}`));