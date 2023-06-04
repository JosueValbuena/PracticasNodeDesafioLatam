// mostrar mensajes en consola desde la terminal---

/* console.log("hola");

const fecha = new Date(); */

// console.log(fecha);


// creando archivos desde la terminal---

/* const fs = require("fs");

const tareas = `
Tarea 1.
Tarea 2.
Tarea 3.
`

fs.writeFileSync("tareas.txt", tareas); */

/* const fs = require("fs");

const tareas = [
    {text: "tarea 1"},
    {text: "tarea 2"},
    {text: "tarea 3"},
]

fs.writeFileSync("tareas.json", JSON.stringify(tareas)); */

/* const fs = require("fs");

const word = "Creando un archivo Word.doc con Node"

fs.writeFileSync("document.doc", word); */

/* const fs = require("fs");

const excel = "excel1 excel2, excel3";

fs.writeFileSync("excel.xls", excel); */

/* const fs = require("fs");

const autos = [
    {
    marca: 'Susuki',
    modelo: 'Kicks',
    },
    {
    marca: 'Toyota',
    modelo: 'Corola',
    },
    {
    marca: 'GAC',
    modelo: 'GS4',
    },
    {
    marca: 'Changan',
    modelo: 'CS35 Plus',
    }
    ]

fs.writeFileSync("autos.json", JSON.stringify(autos));
 */

// leer archivos ---

/* const fs = require('fs');

const autos = fs.readFileSync('autos.json', 'utf8');

console.log(autos); */

/* const fs = require('fs');

const autos = fs.readFileSync('autos.json', 'utf8');

JSON.parse(autos).forEach(auto => {
console.log(auto)    
}); */

// importar archivos o modulos js

/* const {saludar, darGracias, varciarJSON} = require('./semana1B');

let nombre = 'josue';

saludar(nombre);
darGracias(nombre);
varciarJSON('autos.json'); */

/* const {createFile, readFile} = require('./semana1B');

createFile('archivo1', 'todo ok');

readFile('archivo1'); */

/* const {saludar, darGracias} = require('./semana1B');

const argumentos = process.argv.slice(2);

const nombre1 = argumentos[0];

const nombre2 = argumentos[1];

saludar(nombre1);

darGracias(nombre2); */

const {createFile, readFile} = require('./semana1B');

const argumentos = process.argv.slice(2);

const argumento1 = argumentos[0];

const argumento2 = argumentos[1];

createFile(argumento1, argumento2);

readFile(argumento1);