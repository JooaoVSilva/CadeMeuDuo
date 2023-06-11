function mudarPaginaCadastro() {
    window.location = "./cadastro.html"
  }
  
function mudarPaginaLogin(){
    window.location = "./login.html"
}

var NicknameVar = "";
var emailVar = "";
var senhaVar = "";
/* var Varchampion_fav = ""; */
var senhaRepeatVar = ""

function Limpar(){
    input_nickmane.value = "";
    input_email.value = "";
    input_Senha.value = "";
/*     champion_fav.value = ""; */
    senhaRepeatVar = "";
}

function cadastro() {
    

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    NicknameVar = input_nickmane.value;
    emailVar = input_email.value;
    senhaVar = input_Senha.value;
    senhaRepeatVar = psw_repeat.value;
  /*   Varchampion_fav = champion_fav.value; */

    
    if (NicknameVar == "" || emailVar == "" || senhaVar == ""|| /* Varchampion_fav == ""|| */ senhaRepeatVar == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor preencha todos os campos',
          })
        return false;
    } else if (senhaVar != senhaRepeatVar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senhas nãos conferem',
          })
          return false
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            NicknameServer:NicknameVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
  /*           championSever: Varchampion_fav */
        })

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Cadastro Efetuado',
                text: 'cadastro feito com exito',
            })
            setTimeout(() => {
            window.location = "login.html";
           }, "2000")

            Limpar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}


function entrar() {
 
    var emailVar2 = email_input.value;
    var senhaVar2 = Senha_input.value;
    var senhaRepeatVar = psw_repeat.value;
    
    if (emailVar2 == ""|| senhaVar2 == ""|| senhaRepeatVar == ""){
        alert("Insira todos os campos")
        return false;
    }else if (senhaVar2 != senhaRepeatVar) {
        alert('Senhas não conferem')
        return false;
    }

    console.log("FORM LOGIN: ", emailVar2);
    console.log("FORM SENHA: ", senhaVar2);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar2,
            senhaServer: senhaVar2
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.Nickname;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.TITULO_USUARIO = json.tituloUsuario;

                setTimeout(function () {
                    window.location = "dashboard/Usuarios.html";
                }, 1000); 

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}