const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

describe("Testin unitario con Jest", () => {
    it("Comprobando el resultado de una sumatorio", () => {
        const n1 = 5;
        const n2 = 4;
        const resultado = sumar(n1, n2);

        expect(resultado).toBe(9);
    });
    it("Comprobando el resultado de una resta", () => {
        const n1 = 10;
        const n2 = 5;
        const resultado = restar(n1, n2);

        expect(resultado).toBe(5);
    }) 
})