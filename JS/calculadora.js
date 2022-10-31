function divide (num1, num2) {

    if (num1<0 || num2 <= 0) {
        alert ('não aceita número negativo e não pode dividir por zero')
        return      // COM ISSO, EU MATO O RESTANTE DO CÓDIGO. ACABA AQUI NESSA LINHA .
    }

    const resultado = num1 / num2
    return resultado
}

module.exports = {divide}  // EXPORT transforma em chave e valor  divide:divide

module.exports.divide = divide  // aqui faço manualmente chave e valor, que optei por ter o mesmo nome.