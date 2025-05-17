let botao = document.querySelector("#botao");
botao.addEventListener("click", trocaTexto);

function trocaTexto() {
    let paragrafo = document.querySelector("#mensagem");
    paragrafo.textContent = "Bem-vindo(a)! Aqui você vai saber um pouco mais sobre os meus interesses";
}
