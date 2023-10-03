const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function rotacionarPonteiro(ponteiro, angulo) {
    ponteiro.style.transform = `rotate(${angulo}deg)`;
}

function relogio() {
    date = new Date();

    // calculado dos segundos:
    // 60 = 360;
    // s = angulo;
    // 60angulo = 360 * s;
    // angulo = 360 * s / 60;
    // angulo = 6 * s

     // calculado das horas:
    // 12 = 360;
    // h = angulo;
    // 12 * angulo = h * 360
    // angulo = h * 360 / 12
    // angulo = h * 30
  



    let s = date.getSeconds() * 6;
    let m = date.getMinutes() * 6 + (s / 60);
    let h = date.getHours() * 30 +(m / 12);
    rotacionarPonteiro(segundos, s);
    rotacionarPonteiro(minutos, m);
    rotacionarPonteiro(horas, h);
}

relogio();

setInterval(relogio, 1000);

date = new Date();

// console.log(date.getSeconds()); //segundos
// console.log(date.getMinutes()); //minutos
// console.log(date.getHours()); //horas

