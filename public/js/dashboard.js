function trocarpagequiz() {
  window.location = "./quiz.html";
}
function trocarpagedash() {
  window.location = "./dashboard.html";
}


let proximaAtualizacao;



window.onload = obterDadosGraficos();

function obterDadosGraficos() {
  obterDadosGraficoPersonagem();
  listarUsuario();
}


function obterDadosGraficoPersonagem() {

  fetch(`/medidas/buscarTotalMedidaPersonagemF`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resposta) {
              console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

              plotarGraficoP(resposta);
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
      .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
}


function plotarGraficoP(resposta) {

  console.log('iniciando plotagem do gráfico...');

  let labelsP = []


  for (let i = 0; i < resposta.length; i++) {
      const cont = resposta[i];
      console.log(cont.nome)
      labelsP.push(cont.nome)
  }


  let dados = {
      labels: labelsP,
      datasets: [{
          labels: [resposta.nome],
          data: [],
          fill: true,
          backgroundColor: [
              '#da0a07',
              '#0cd234',
              '#d7b90c',
              '#06d7c6',
              '#e9e9ca',
          ],
          tension: 0.1
      }]
  };

  console.log('----------------------------------------------')
  console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
  console.log(resposta)

  for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];
      dados.datasets[0].data.push(registro.qtdP);

  }
  const config = {
      // type: 'doughnut',
      type: 'bar',
      data: dados,
      options: {
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      boxWidth: 50,
                      boxHeight: 20,
                      font: {
                          weight: 'bold',
                          size: 15
                      }
                  }

              }
          }
      }
  };

  let myChart1 = new Chart(
      document.getElementById(`myChartCanvas1`),
      config
  );


}

function listarUsuario() {

  fetch(`/medidas/listarUsuario`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resposta) {
              console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

              plotarGraficoU(resposta);
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
      .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
}

function plotarGraficoU(resposta) {

  console.log('iniciando plotagem do gráfico...');

  let labelsP = []


  for (let i = 0; i < resposta.length; i++) {
      const cont = resposta[i];
      console.log(cont.nome)
      labelsP.push(cont.nome)
  }


  let dados = {
      labels: labelsP,
      datasets: [{
          labels: [resposta.nome],
          data: [],
          fill: true,
          backgroundColor: [
              '#da0a07',
              '#0cd234',
              '#d7b90c',
              '#06d7c6',
              '#e9e9ca',
          ],
          tension: 0.1
      }]
  };

  console.log('----------------------------------------------')
  console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
  console.log(resposta)

  for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];
      dados.datasets[0].data.push(registro.qtdA);

  }
  const config = {
      // type: 'doughnut',
      type: 'bar',
      data: dados,
      options: {
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      boxWidth: 50,
                      boxHeight: 20,
                      font: {
                          weight: 'bold',
                          size: 15
                      }
                  }

              }
          }
      }
  };

  let myChart2 = new Chart(
      document.getElementById(`myChartCanvas2`),
      config
  );


}

function atualizarGrafico(idTransporte, dados, myChart) {
  fetch(`/medidas/tempo-real/${idTransporte}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {
          obterdados(idTransporte);
          // alertar(novoRegistro, idTransporte);
          console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
          console.log(`Dados atuais do gráfico:`);
          console.log(dados);

          let avisoCaptura = document.getElementById(
            `avisoCaptura${idTransporte}`
          );
          avisoCaptura.innerHTML = "";

          if (
            novoRegistro[0].momento_grafico ==
            dados.labels[dados.labels.length - 1]
          ) {
            console.log(
              "---------------------------------------------------------------"
            );
            console.log(
              "Como não há dados novos para captura, o gráfico não atualizará."
            );
            avisoCaptura.innerHTML =
              `<i class='fa-solid fa-triangle-exclamation'></i> Gráfico atualizado com dados atuais! <br> Última atualização: ${novoRegistro[0].momento_grafico}`;
            console.log("Horário do novo dado capturado:");
            console.log(novoRegistro[0].momento_grafico);
            console.log("Horário do último dado capturado:");
            console.log(dados.labels[dados.labels.length - 1]);
            console.log(
              "---------------------------------------------------------------"
            );
          } else {
            // tirando e colocando valores no gráfico
            dados.labels.shift(); // apagar o primeiro
            dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

            dados.datasets[0].data.shift(); // apagar o primeiro de umidade
            dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

            dados.datasets[1].data.shift(); // apagar o primeiro de temperatura
            dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

            myChart.update();
          }

          // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
          proximaAtualizacao = setTimeout(
            () => atualizarGrafico(idTransporte, dados, myChart),
            2000
          );
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(
          () => atualizarGrafico(idTransporte, dados, myChart),
          2000
        );
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados p/ gráfico: ${error.message}`
      );
    });
}