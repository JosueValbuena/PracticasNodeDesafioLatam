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

const fs = require("fs");

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

fs.writeFileSync("autos.txt", JSON.stringify(autos));
