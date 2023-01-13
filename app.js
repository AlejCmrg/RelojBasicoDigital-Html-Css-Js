// function(){

  function actuaizarHora(){

          //variables para agignar valor a dia, fecha, etc;

        let fecha = new Date()

        let    horas = fecha.getHours();

        let  ampm;

        let minutos = fecha.getMinutes();

        let segundos = fecha.getSeconds();

        let  diaSemana = fecha.getDay();

        let  dia = fecha.getDate();

        let mes = fecha.getMonth();

        let year = fecha.getFullYear();

          //variables para la hora accediendo al contenido por id;

      let pHoras = document.getElementById('horas');

      let  pAMPM = document.getElementById('ampm');

      let  pMinutos = document.getElementById('minutos');

      let  pSegundos = document.getElementById('segundos');

      let  pDiaSemana = document.getElementById('diaSemana');

      let  pDia = document.getElementById('dia');

      let  pMes = document.getElementById('mes');

      let  pYear = document.getElementById('year');


          //array dias de semana y mes;

    let semana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    pDiaSemana.textContent = semana[diaSemana];

    pDia.textContent = dia;

    let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    pMes.textContent = meses[mes];

    pYear.textContent = year;

    if(horas >= 12){
        horas = horas - 12;
        ampm = 'PM';
    }else{
      ampm = 'AM';
    }

    if(horas == 0){
        horas = 12;
    }

    pHoras.textContent = horas;

    pAMPM.textContent = ampm;

    if(minutos < 10){minutos = '0' + minutos};
    if(segundos < 10){segundos = '0' + segundos};

    pMinutos.textContent = minutos;

    pSegundos.textContent = segundos;


  };

  actuaizarHora();
  let intervalo = setInterval(actuaizarHora, 1000);
