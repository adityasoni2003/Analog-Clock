setInterval(setClock,1000);


const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio =(secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRatio(hourHand,hoursRatio);
    setRatio(minuteHand,minutesRatio);
    setRatio(secondHand,secondsRatio);


}

function setRatio(hand,ratio){
    hand.style.setProperty('--rotation',ratio * 360)
}