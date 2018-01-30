const secClock = document.getElementById('sec');
const minClock = document.getElementById('min');
const hourClock = document.getElementById('hour');


setInterval(() => {
let seconds = new Date().getSeconds() * 6 + 270;
secClock.style.transform = `rotate(${seconds}deg)`;
},1000);

setInterval(() => {
  let min = new Date().getMinutes() * 6 +270;
  minClock.style.transform = `rotate(${min}deg)`;
}, 1000);

setInterval(() => {
  let hour = new Date().getHours() * 30 + 270;
  hourClock.style.transform = `rotate(${min}deg)`;
}, 1000);