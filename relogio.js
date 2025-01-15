const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function(){
    let dataDia = new Date();
    let dataHora = dataDia.getHours();
    let dataMinutos = dataDia.getMinutes();
    let dataSegundos = dataDia.getSeconds();

    if(dataHora < 10) dataHora = '0' + dataHora;

    if( dataMinutos < 10) dataMinutos = '0' + dataMinutos;

    if(dataSegundos < 10) dataSegundos = '0' + dataSegundos;

    

    horas.textContent = dataHora;
    minutos.textContent = dataMinutos;
    segundos.textContent = dataSegundos;

    
})

