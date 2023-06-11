
b_usuario.innerHTML = sessionStorage.NOME_USUARIO
cargoUsuario.innerHTML = sessionStorage.TITULO_USUARIO

function mudarpaginaquiz() {
    window.location = "./quiz.html"
}

function mudarpaginadash(){
    window.location = "./Usuarios.html"
}

function logout(){
    sessionStorage.clear();
    window.location = "../index.html";
}
