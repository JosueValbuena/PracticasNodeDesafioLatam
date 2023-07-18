const request = require('supertest');
const app = require('../app.js');

describe('Operaciones CRUD', ()=>{
    it("Obteniendo un 200", async () => {
        const response = await request(app).get("/productos").send();
        const status = response.statusCode;
        expect(status).toBe(200);
    });

    it("Obteniendo un producto", async () => {
        const { body } = await request(app).get("/productos/1").send();
        const producto = body;
        expect(producto).toBeInstanceOf(Object);
    });

    it("Enviando producto nuevo", async () => {
        const producto = { nombre: "bate", stock: 5 };
        const { body: productos } = await request(app).post("/productos").send(producto);
        const productoEsperado = {id: productos.id, nombre: "bate", stock: 5};
        console.log(productos)
        expect(productos.statusCode).toBe(200);
        expect(productos).toContainEqual(producto);
    })
})