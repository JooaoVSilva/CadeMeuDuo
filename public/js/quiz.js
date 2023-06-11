let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual a região mais proximo de targon",
    alternativaA : "Shurima",
    alternativaB : "Demacia",
    alternativaC : "Ionia",
    correta      : "Shurima",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual o verdadeiro nome de Pantheon?",
    alternativaA : "Saijax",
    alternativaB : "Jarvan",
    alternativaC : "Atreus",
    correta      : "Atreus",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Tribo dos campeões Leona e Pantheon",
    alternativaA : "ra horak",
    alternativaB : "garras do inverno",
    alternativaC : "icathia",
    correta      : "ra horak",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "seres que escolhem humanos como representantes",
    alternativaA : "Darkins",
    alternativaB : "Aspectos",
    alternativaC : "Ascendentes",
    correta      : "Aspectos",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Titulo dado ao campeão Aurelion Sol",
    alternativaA : "O forjador de estrelas",
    alternativaB : "O dragão espacial",
    alternativaC : "O Aspecto do orgulho",
    correta      : "O forjador de estrelas",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Fé que venera a lua",
    alternativaA : "Luna",
    alternativaB : "Lunari",
    alternativaC : "irmã prateada",
    correta      : "Lunari",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual a região inicial de Taric",
    alternativaA : "Ionia",
    alternativaB : "Freljord",
    alternativaC : "Demacia",
    correta      : "Demacia",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Nome da irmã de Aphelios",
    alternativaA : "Alune",
    alternativaB : "Luka",
    alternativaC : "Luna",
    correta      : "Alune",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "De que Soraka abdicou pelos mortais ...",
    alternativaA : "Existência",
    alternativaB : "Imortalidade",
    alternativaC : "Poderes",
    correta      : "Imortalidade",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "dentre a tripo dos ra horak qual o nome da fé seguida ...",
    alternativaA : "Três irmãs",
    alternativaB : "Lunari",
    alternativaC : "Solari",
    correta      : "Solari",
}

// variavel COM UM ARRAY DE jsons COM TODAS AS QUESTOES
var questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

var numero = document.querySelector('#numero')
var total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

var totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent


    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 // pontos = pontos + 10
    } else {
        
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        var Nickname = sessionStorage.ID_USUARIO;
        var titulo = ''

        if (pontos <= 20){
            titulo = "Gordox da lore"
        } else if (pontos <= 40){
            titulo = "Novato da lore"
        } else if (pontos <= 60){
            titulo = "Pleno da lore"
        } else if (pontos <= 80){
            titulo = "Sábio da lore"
        } else {
            titulo = "Grão-Mestre da lore"
        }
    
        fetch("/usuarios/atualizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tituloServer: titulo,
                NicknameServer: Nickname 
            })

        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO atualizar()")
    
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

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
    
        pontos = 0
        location.reload();
        return false;
    }, 2000)
}