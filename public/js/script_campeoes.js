function mudarPaginaCadastro() {
    window.location = "../cadastro.html"
}

function mudarPaginaLogin() {
    window.location = "../login.html"
}

function lerMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("maisTexto");
    var lermaisbtn = document.getElementById("btnLerMais");

    if (pontos.style.display == "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        lermaisbtn.innerHTML = "Ler Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        lermaisbtn.innerHTML = "Ler Menos";
    }
}