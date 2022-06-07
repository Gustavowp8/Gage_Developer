const labels = [
    'Site',
    'Questões',
    'Cadastros',
    'Arquivos GERAL',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: [
        '#520120',
        '#08403E',
        '#706513',
        '#001542'
    ],
      borderColor: '#FFFFFF',
      data: [12, 1, 8, 2],
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  function fechagre(){
    mgratfico.style.display='none'
  }

  function chamagrafi(){
    mgratfico.style.display='block'
  }

  function chamado(){
      alert('Já existe um protocolo em andamento N° 154.584.85-GA')
  }

  function irSite(){
      alert('EERRO! no banco de dados o arquivo de entrada INDEX não pode ser acessado.')
  }

  function irDash(){
    alert('ERRO no banco de dados, devido a esta falta de conexão o site pode não esta funcionando como o esperado.')
    location='https://gustavowp8.github.io/dashboardQQ/'
  }

  function irNomal(){
      location='http://qlegis.com.br/'
  }