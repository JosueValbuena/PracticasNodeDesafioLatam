//exportar archivos o modulos js ---

const saludar = (nombre) => {
    console.log(`Hola ${nombre}`)
}
const darGracias = (nombre) => {
    console.log(`Gracias ${nombre}`)
}

module.exports = {saludar, darGracias}