const newyeardate = "1 Jan 2022";
const d = document.getElementById('dayid');
const h = document.getElementById('hourid');
const m = document.getElementById('minuteid');
const s = document.getElementById('secondid');
function countDown() {
    const newyear = new Date(newyeardate);
    const currrentdate = new Date();
    const totalseconds = (newyear - currrentdate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    d.innerText = days;
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
    console.log(days, hours, minutes, seconds);
}
setInterval(countDown, 1000);
