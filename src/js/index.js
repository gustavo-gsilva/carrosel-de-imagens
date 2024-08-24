const elementoSetaEsquerda = document.querySelector('.seta-esquerda');

const elementoSetaDireita = document.querySelector('.seta-direita');

const cursoresDasSetas = document.querySelector('seta-desativada');

const elementoDoCarrosel = document.querySelectorAll('.carrosel-item-1, .carrosel-item-2, .carrosel-item-3, .carrosel-item-4');

let indiceAtual = 0;

function setaEsquerda() {
    if (indiceAtual === 0) return;
    scrollBy(-1536, 0);
    indiceAtual--;
    verificarSetas();
}

function setaDireita() {
    if (indiceAtual === elementoDoCarrosel.length + 1) return;
    scrollBy(1536, 0);
    indiceAtual++;
    verificarSetas();
}

setaEsquerda()
setaDireita()

function verificarSetas() {
    elementoSetaEsquerda.style.opacity = indiceAtual === 0 ? '0.5' : '1';
    elementoSetaDireita.style.opacity = indiceAtual === elementoDoCarrosel.length + 1 ? '0.5' : '1';
}

verificarSetas();

elementoSetaEsquerda.addEventListener('click', setaEsquerda);

elementoSetaDireita.addEventListener('click', setaDireita);

const elementoParaEncontrar = document.querySelector('.carrosel-item-1');
console.log(elementoParaEncontrar);

const indiceParaEncontrar = Array.from(elementoDoCarrosel).indexOf(elementoParaEncontrar);
console.log(indiceParaEncontrar);