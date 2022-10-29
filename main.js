import "./style.scss"
import "./JS/gerenciaDeNomes"
import "./JS/calculadora"
import "./cores.scss"
const {concatena} = require ("./JS/gerenciaDeNomes")
const {divide} = require ("./JS/calculadora")



const botaoConcatena = document.querySelector("#id-botao")
botaoConcatena.addEventListener ("click", executaExercicioUm )

function executaExercicioUm () {
    const resultado = document.querySelector("#card-exercicio__1_resultado")
    
    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value
    
    const resposta = concatena(nome, sobrenome)

    resultado.innerHTML = resposta
}




const botaoDivide = document.querySelector("#id-botao-divide")
botaoDivide.addEventListener ("click", executaExercicioDois )

function executaExercicioDois (){
    const num1 = document.querySelector("#num1").value
    const num2 = document.querySelector("#num2").value
    const resultado = document.querySelector("#card-exercicio__2_resultado")

    if (num1<0 || num2 <= 0) {
        alert ('não aceita número negativo e não pode dividir por zero')
        return      // COM ISSO, EU MATO O RESTANTE DO CÓDIGO. ACABA AQUI NESSA LINHA .
    }
    
    const resposta = divide(num1, num2)

    resultado.innerHTML = resposta
}

