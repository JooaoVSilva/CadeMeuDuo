var myModal_cadastro = document.getElementById("myModal_cadastro");
var cadastro_button = document.getElementById("cadastro");
var span = document.getElementsByClassName("close")[0];

cadastro_button.onclick = function(){
    myModal_cadastro.style.display = "block";
}

span.onclick = function(){
    myModal_cadastro.style.display = "none";
}

window.onclick = function(event){
    if (event.target == myModal_cadastro){
        myModal_cadastro.style.display = "none";
    }
}