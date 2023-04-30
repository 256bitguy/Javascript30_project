const SecondHand=document.querySelector('.second-hand')
const minuteHand=document.querySelector('.minute-hand')
const hourHand=document.querySelector('.hour-hand')
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();
    const SecondsDegrees =(seconds/60)*360+90;
    const MinutesDegrees=(minutes/60)*360+90;
    const HoursDegrees=(hours/24)*360+90;
    
    console.log(hours);
    SecondHand.style.transform=`rotate(${SecondsDegrees}deg)`;
    minuteHand.style.transform=`rotate(${MinutesDegrees}deg)`
    hourHand.style.transform=`rotate(${HoursDegrees}deg)`
}
setInterval(setDate,1000);