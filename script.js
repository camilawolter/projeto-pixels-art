//Adicionando cores na paleta
const corDois = document.getElementsByClassName('color')[1];
corDois.style.background = 'pink';

const corTres = document.getElementsByClassName('color')[2];
corTres.style.background = 'green';

const corQuatro = document.getElementsByClassName('color')[3];
corQuatro.style.background = 'yellow';

//Selecionando a cor incial

function corSelecionada() {
    const corUm = document.querySelector('.color');
    corUm.classList.add('selected');
}
corSelecionada();
