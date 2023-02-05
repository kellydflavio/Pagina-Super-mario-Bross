/*
OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abririr a modal  com o vídeo do trailer.

*/
console.log('mostar o document', document);

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", ()=>{
//passo 4 - abriri a modal na tela.
   
    video.setAttribute("src", linkDoVideo);
    alternarModal();
})

//passo 3 - dar um jeito de pegar o elemento da modal no js.

console.log("mostrar o objeto da modal");

//OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
//passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js.
const botaoFecharModal = document.querySelector(".fechar-modal");


//passo 2 - dar um jeito de identificar quando o usuário clicar no x.
botaoFecharModal.addEventListener("click", () => {
// passo 3 - fechar a modal
alternarModal();
video.setAttribute("src", "");
});






