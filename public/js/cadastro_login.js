var NicknameVar = "";
var emailVar = "";
var senhaVar = "";
var Varchampion_fav = "";


function cadastro(){
    NicknameVar += input_nickmane.value;
    emailVar += input_email.value;
    senhaVar += input_Senha.value;
    Varchampion_fav += champion_fav.value;
}

function Limpar(){
    input_nickmane.value = "";
    input_email.value = "";
    input_Senha.value = "";
    psw_repeat.value = "";
}