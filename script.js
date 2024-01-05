const time = document.getElementById('Time');
const timeFormate = document.getElementById('TimeFormate');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000);
});

const showTime =()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //console.log("hours" + hr + "mins"+min+"sec"+sec);
    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    sec = sec<10 ? `0${sec}` : sec;
    time.innerHTML = `${hr} : ${min} : ${sec}`;

    timeFormate.innerHTML = hr>12 ? "PM" : "AM";
}
