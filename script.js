//Adicionando cores na paleta
const corDois = document.getElementsByClassName('color')[1];
corDois.style.backgroundColor = 'pink';

const corTres = document.getElementsByClassName('color')[2];
corTres.style.backgroundColor = 'green';

const corQuatro = document.getElementsByClassName('color')[3];
corQuatro.style.backgroundColor = 'yellow';

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
                                                                          //Referências: .getComputedStyle - https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue 
                                                                          //.getPropertyValue -  https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
            const corSelecionadaEAplicando = window.getComputedStyle(qualSelecionado, null).getPropertyValue('background-color');
            evento.target.style.backgroundColor = corSelecionadaEAplicando;
        })
    }
}
selecionaPinta();
