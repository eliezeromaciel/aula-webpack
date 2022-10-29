function divide (num1, num2) {
    const resultado = num1 / num2
    return resultado
}

module.exports = {divide}  // EXPORT transforma em chave e valor  divide:divide

module.exports.divide = divide  // aqui faço manualmente chave e valor, que optei por ter o mesmo nome.