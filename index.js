const timings = {
    hours : 0,
    minutes : 0,
    seconds : 0
}
let intervalId;
let isPlaying = true;

document.querySelector(".StartBtn").addEventListener("click", () => {

    if(isPlaying){
        document.querySelector(".StartBtn").textContent ="Stop";
        document.querySelector(".StartBtn").classList.add("StopBtn");
        isPlaying = false;

        intervalId = setInterval(() => {
            timings.seconds++;
            if (timings.seconds === 60) {
                timings.minutes++;
                timings.seconds = 0;
            }
            if (timings.minutes === 60) {
                timings.hours++;
                timings.minutes = 0;
            }
    
            const formattedTime = formatTime(timings.hours, timings.minutes, timings.seconds);
            document.querySelector(".timer").innerHTML = formattedTime;
    
        }, 1000);
    }else{
        document.querySelector(".StartBtn").textContent ="Start";
        document.querySelector(".StartBtn").classList.remove("StopBtn");
        isPlaying = true;
        clearInterval(intervalId);
    }

});

function formatTime(hours, minutes, seconds) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


document.querySelector(".ResetBtn").addEventListener('click', () => {
    document.querySelector(".StartBtn").textContent = "Start";
    document.querySelector(".StartBtn").classList.remove("StopBtn");
    isPlaying = true;
    clearInterval(intervalId);
    timings.minutes = 0;
    timings.hours = 0;
    timings.seconds = 0;
    const formattedTime = formatTime(timings.hours, timings.minutes, timings.seconds);
    document.querySelector(".timer").innerHTML = formattedTime;
});