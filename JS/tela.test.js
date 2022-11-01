const freteGratis = require ("./tela")



test("frete grátis verdadeiro quando 200", ()=> {
    expect(freteGratis.freteGratis(200)).toBeTruthy()
})