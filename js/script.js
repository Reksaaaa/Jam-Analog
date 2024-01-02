const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    

    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * degree;
    const ss = date.getSeconds() * degree;

    hr.style.transform = `rotatez(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotatez(${mm}deg)`;
    sec.style.transform = `rotatez(${ss}deg)`;
});