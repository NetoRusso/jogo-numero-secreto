const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (menorValor - maiorValor - 1) + (maiorValor + 1));
};

// console.log((menorValor - maiorValor - 1) + (maiorValor + 1))

console.log('o número secreto é :', numeroSecreto);