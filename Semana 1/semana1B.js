//exportar archivos o modulos js ---
const fs = require('fs');

const saludar = (nombre) => {
    console.log(`Hola ${nombre}`)
}
const darGracias = (nombre) => {
    console.log(`Gracias ${nombre}`)
}

const varciarJSON = (ele) => {
    fs.writeFileSync(ele, '[]')
}

const createFile = (nombre, contenido ) => {
    fs.writeFileSync(`${nombre}.txt`, contenido);
    console.log('archivo creado con exito');
}

const readFile = (nombre) => {
    const read = fs.readFileSync(`${nombre}.txt`, 'utf8')
    console.log(read);
}

module.exports = { saludar, darGracias, varciarJSON, createFile, readFile }