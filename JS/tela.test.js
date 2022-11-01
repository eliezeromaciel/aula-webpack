const jestCalculadora = require ("./calculadora")
const jestgerenciaNomes = require ("./gerenciaDeNomes")



test("o valor precisa ser 5, quando dividido 25 por 5", ()=> {
    expect(jestCalculadora.divide(25,5)).toBe(5)
})

test("Resultado precisa ser EU Marinho", () => {
    expect(jestgerenciaNomes.concatena("Eu", "Marinho")).toBe("Eu Marinho")
})