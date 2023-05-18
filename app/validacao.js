

function verificaSeOChutePossuiUmValorValido(chute){
    console.log(chute)
    const numero =+chute
    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>chute inválido</div>'
        }

    if(numeroForMaiorOuMenorQueONumeroPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é <br><span class="box__win">${numeroSecreto}</span></h3>
            <button id="jogar-novamente" class="btn-jogar"> Jogar novamente <i class="fa-solid fa-rotate-right fa-spin"></i> </button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down fa-bounce"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up fa-bounce"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

function numeroForMaiorOuMenorQueONumeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
