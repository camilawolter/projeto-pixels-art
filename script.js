//Adicionando cores na paleta
function coresAleatorias() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

const corDois = document.getElementsByClassName('color')[1];
corDois.style.backgroundColor = `rgb(${g},${b},${r})`;

const corTres = document.getElementsByClassName('color')[2];
corTres.style.backgroundColor = `rgb(${r},${b},${g})`;

const corQuatro = document.getElementsByClassName('color')[3];
corQuatro.style.backgroundColor = `rgb(${b},${g},${r})`;
}
coresAleatorias();

//Criando pixel board a partir de um determinado n
function criandoPixelBoard(num = 5) {
    const pixelBoard = document.querySelector('#pixel-board');

    for (let index = 0; index < num; index += 1) {
        const criandoQuadrado = document.createElement('div');
        criandoQuadrado.classList.add('divPixel');
        pixelBoard.appendChild(criandoQuadrado);

        for (let index2 = 0; index2 < num; index2 += 1) {
            const criandoPixel = document.createElement('div');
            criandoPixel.classList.add('pixel');
            criandoQuadrado.appendChild(criandoPixel);
        }
    }
}
criandoPixelBoard();

//Selecionando a cor incial
function corSelecionada() {
    let corUm = document.querySelector('.color');
    corUm.classList.add('selected');
}
corSelecionada();

//Selecionando uma cor
const corPaleta = document.querySelectorAll('.color');
function selecionaCor(evento) {
    const selecionada = document.querySelector('.selected');
    selecionada.classList.remove('selected');
    evento.target.classList.add('selected');
  }
// Referência:forEach - https://blog.betrybe.com/javascript/javascript-foreach/
  corPaleta.forEach(function(evento){
    evento.addEventListener('click', selecionaCor)
});

//Preenche um pixel da cor selecionada
function selecionaPinta() {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', function(evento) {
            const qualSelecionado = document.querySelector('.selected');
//Referências: .getComputedStyle - https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue .getPropertyValue -  https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
            const corSelecionadaEAplicando = window.getComputedStyle(qualSelecionado, null).getPropertyValue('background-color');
            evento.target.style.backgroundColor = corSelecionadaEAplicando;
        })
    }
}
selecionaPinta();

//Cria botão que limpa os quadrados preenchidos
function limparBotao() {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        if (pixel[index] !== 'white') {
            pixel[index].style.backgroundColor = 'white';
        }
    }
    document.getElementById('clear-board').addEventListener('click', limparBotao);
}
limparBotao();


//Tamanho defino pelo usuário
function definindoBoard(num) {
    if (num < 5) {
        return 5;
    }
    if (num > 50) {
        return 50;
    }
    return num;
}
definindoBoard();

function tamanhoBoard() {
    const input =  document.querySelector('#board-size');
    const buttonVQV = document.querySelector('#generate-board');
    const pixelBoard = document.querySelector('#pixel-board');

    buttonVQV.addEventListener('click', function() {
        if (input.value === '') {
            alert('Board inválido!');
        } else {
            pixelBoard.innerHTML = '';
            const number = input.value;
            const novoNum = definindoBoard(number);
            criandoPixelBoard(novoNum);
            input.value = '';
        }
    })
}
tamanhoBoard();