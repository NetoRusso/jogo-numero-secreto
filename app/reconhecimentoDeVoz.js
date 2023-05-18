const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    const chuteOk =+ chute
    gameOver(chute);

    if(chuteForInvalido(chuteOk)){
        console.log('foi')
    }else {
        exibeChuteNaTela(chute);    
        verificaSeOChutePossuiUmValorValido(chute);
        }
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

function gameOver(chute){
    if(chute === "game over" || chute === "o jogo acabou") {
        document.body.innerHTML = `
        <h2>Game Over!!!<h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente <i class="fa-solid fa-rotate-right fa-spin"></i> </button>
    `
        document.body.style.backgroundColor =  "#7149C6";
    }
}

recognition.addEventListener('end', () => recognition.start());

