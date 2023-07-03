//importar express
const express = require('express');
const app = express();

//Verificar puerto
const port = process.env.PORT || 3000;

//importar File Sync
const fs = require('fs');

//importando el paquete cors
const cors = require('cors');

//darle puerto al servidor y declarar mensaje en consola
app.listen(port, console.log("servidor iniciado en el puerto " + port));

//llamando al paquete coors
app.use(cors());

//middleware
app.use(express.json());

//crear end points para consultas
app.get('/home', (req, res) => {
    res.send('hola');
})


//devolver strins a consultas
app.get('/usuario', (req, res) => {
    res.send('josue');
})


// devolver datos de variables a consultas
const fecha = new Date();

app.get('/fecha', (req, res) => {
    res.send(fecha);
})

// devolver datos en formato json a consultas (api rest)
app.get('/productos', (req, res) => {
    const productos = JSON.parse(fs.readFileSync("productos.json"))
    res.json(productos);
})

app.get('/usuarios', (req, res) => {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));
    res.json(usuarios);
})

//agregar datos a un json con metodo POST
app.post('/productos', (req, res) => {
    const producto = req.body;
    const productos = JSON.parse(fs.readFileSync('productos.json'));
    productos.push(producto);
    fs.writeFileSync('productos.json', JSON.stringify(productos));
    res.send('producto agregado con exito');
})

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    const usuarios = JSON.parse(fs.readFileSync('usuarios.json'));
    usuarios.push(usuario);
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
    res.send('usuario agregado correctamente');
})

//eliminar datos a un json con metodo DELETE
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuarios = JSON.parse(fs.readFileSync('usuarios.json'));
    const index = usuarios.findIndex((i) => i.id == id);
    usuarios.splice(index, 1);
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
    res.send('usuario eliminado con exito');
})

app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    const productos = JSON.parse(fs.readFileSync('productos.json'));
    const index = productos.findIndex(i => i.id == id);
    productos.splice(index, 1);
    fs.writeFileSync('productos.json', JSON.stringify(productos));
    res.send('producto eliminado con exito');
})

// modificar datos de un json con metodo PUT
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = req.body;
    const usuarios = JSON.parse(fs.readFileSync('usuarios.json'));
    const index = usuarios.findIndex(i => i.id == id);
    usuarios[index] = usuario;
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
    res.send('usuario modificado correctamente');
})

app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const producto = req.body;
    const productos = JSON.parse(fs.readFileSync('productos.json'));
    const index = productos.findIndex(i => i.id == id);
    productos[index] = producto;
    fs.writeFileSync('productos.json', JSON.stringify(productos));
    res.send('producto modificado');
})

//devolviendo archivos con metodo sendFile del objeto GET

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})