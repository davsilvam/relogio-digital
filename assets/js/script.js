const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const partDay = document.querySelector('#am-pm');

const clock = setInterval(() => {
    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hour < 10) hr = '0' + hour;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    if (hour < 12) {
        partDay.textContent = 'AM'
    } else {
        partDay.textContent = 'PM'
    }

    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = seg;
})