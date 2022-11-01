import "./style.scss"
import "./JS/gerenciaDeNomes"
import "./JS/calculadora"
const {concatena} = require ("./JS/gerenciaDeNomes")
const {divide} = require ("./JS/calculadora")
const moduloTela = require ("./JS/tela")

const botaoConcatena = document.querySelector("#id-botao")
botaoConcatena.addEventListener ("click", executaNomes )

const botaoDivide = document.querySelector("#id-botao-divide")
botaoDivide.addEventListener ("click", executaNumeros)

function executaNomes (){
    executaExercicio ("#nome", "#sobrenome", "#card-exercicio__1_resultado", concatena)
}
function executaNumeros (){
    executaExercicio ("#num1", "#num2", "#card-exercicio__2_resultado", divide )
}

function executaExercicio (id1,id2, tagResultado, funcaoDesejada){
    const retornoDados = moduloTela.pegaDadosDaTelaPorID(id1,id2)
    const resposta = funcaoDesejada(retornoDados[0], retornoDados[1])
    const mostraNaTela = moduloTela.mostraNaTela(resposta, tagResultado  )
}

// CONTINUAR REFATORANDO !!!!!!!!!!!!!!!!!!!
