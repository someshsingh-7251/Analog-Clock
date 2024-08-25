alert("PLZ Do Like Share Comment");
alert("Plz look at the bottom of the page..and follow me on instagram,link is given bellow")
window.onload=()=>{  
const id=(el)=>document.getElementById(el);
const clockHour=id("hour");
const clockMinute=id("min");
const clockSecond=id("sec");
const todayLabel=id("today");
const todateLabel=id("todate");
setInterval(countDown,1000);
function countDown(){
    const date=new Date();
    const currentHour=date.getHours();
    const currentMinute=date.getMinutes();
    const currentSecond=date.getSeconds();
    const currentDayOfWeek=date.toLocaleString("en-us",{weekday:"long"});
    const currentMonth=date.toLocaleString("en-us",{month:"long"});
    const currentDay=date.getUTCDate();
    function setTime(){
        clockHour.style.transform=`rotate(${(currentHour * 30) + (currentMinute * .5)}deg)`;
        clockMinute.style.transform=`rotate(${(currentMinute * 6) + (currentSecond * 0.1)}deg)`;
        clockSecond.style.transform=`rotate(${currentSecond * 6}deg)`;
        todayLabel.textContent=currentDayOfWeek;
        todateLabel.textContent=`${currentMonth} ${currentDay}`;
    }
    if(hour>12){
        hour -=12;
    }
    setTime();
    return countDown;
};
}
