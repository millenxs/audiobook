//let variavel 
//const constante
//var é antigo

const botaoPlayPause = document.getElementById('play-pause'); //recupere o elemento com esse id. Me dá as informações do botão
const audioCapitulo = document.getElementById('audio-capitulo'); //audio 
const botaoProxima = document.getElementById('botao-proximo');
const botaoAnterior = document.getElementById('botao-anterior');
const nomeCapitulo = document.getElementById('capitulo'); //nome da faixa
const botaoStop = document.getElementById('botao-stop')

const numeroCapitulos = 10;
let taTocando = false; //0 está sem tocar. 
let capituloAtual = 1; //onde o audio começa 

//function é uma função que vai deixar preparada para usar quando for conveninte

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle')
    botaoPlayPause.classList.add('bi-pause-circle')
    taTocando = true;
} 
//processo de funcionalidade. Sempre que for executar uma ação(função) usar ()

function pausarFaixa(){
    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play-circle')
    audioCapitulo.pause();
    taTocando = false;
}

function playPause(){
    if (taTocando === true){
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function trocarNomeCapitulo (){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}


function passarFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'; //audio + 1 que é
    tocarFaixa();
    trocarNomeCapitulo()
    taTocando = 1;
}

function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeCapitulo()
    taTocando = 1; 
}

function voltarCapitulos(){
    nomeCapitulo.innerText = 'Capitulo 1';
}

function pararCapitulos(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = 1;
    }

    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play-circle')
    audioCapitulo.src = "./books/dom-casmurro/1.mp3";
    trocarNomeCapitulo();
    voltarCapitulos();
}


botaoPlayPause.addEventListener('click', playPause); //adicione a esse elemento a capacidade de escutar um evento. Execute esse evento através do 'click' e responda isso executando o tocarFaixa.
//addEventListener é capaz de me dá vários eventos, e não só o click. Se fosse o 'onclick', seria apenas o evento de click. 
botaoProxima.addEventListener('click', passarFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);
botaoStop.addEventListener('click', pararCapitulos)




