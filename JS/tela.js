function pegaDadosDaTelaPorID (id1, id2){
    const valor1 = document.querySelector(id1).value
    const valor2 = document.querySelector(id2).value

    return [valor1, valor2]
}

function mostraNaTela (resposta, idResultado){
    const resultado = document.querySelector(idResultado)
    resultado.innerHTML = resposta
}

// function executaExercicio (id1, id2) {
//     const retornoDados = moduloTela.pegaDadosDaTelaPorID(id1, id2)
//     const resposta = concatena(retornoDados[0], retornoDados[1])
//     const mostraNaTela = moduloTela.mostraNaTela(resposta, "#card-exercicio__1_resultado")

// }


module.exports.pegaDadosDaTelaPorID = pegaDadosDaTelaPorID

module.exports.mostraNaTela = mostraNaTela

// module.exports.executaExercicio = executaExercicio