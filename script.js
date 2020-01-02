let activeTimeDisplay = document.getElementById("active-time");
let activeTimeOrig = activeTimeDisplay;


//incrementing the session timer
let session = document.getElementById("session-time");
const incrementSessionDown = document.getElementById("session-decrease");
incrementSessionDown.addEventListener("click", () => {
    if (session.innerHTML > 0) {

        session.innerHTML--;
    }
    else return;
})
const incrementSessionUp = document.getElementById("session-increase");
incrementSessionUp.addEventListener("click", () => {
    if (session.innerHTML > 59) {
        alert("chill, an hour is enough!");
    }
    else if (session.innerHTML >= 0) {

        session.innerHTML++;
    }

    else return;
});

//incrementing the break timer
let rest = document.getElementById("break-time");
const incrementBreakDown = document.getElementById("break-decrease");
incrementBreakDown.addEventListener("click", () => {
    if (rest.innerHTML > 0) {

        rest.innerHTML--;
    }
    else return;
})
const incrementBreakUp = document.getElementById("break-increase");
incrementBreakUp.addEventListener("click", () => {
    if (rest.innerHTML > 14) {
        alert("chill, 15 minutes is enough!");
    }
    else if (rest.innerHTML >= 0) {

        rest.innerHTML++;
    }
    else return;
})

let timer;
function reset() {
    clearInterval(timer);
    session.innerHTML = 25;
    rest.innerHTML = 5;
    document.getElementById("minutes").innerHTML = session.innerHTML;
    document.getElementById("seconds").innerHTML = "00";
    timerRunning = false;
    activeTimeDisplay.style.color = "#404040";
}
function stop() {
    clearInterval(timer);
    document.getElementById("minutes").innerHTML = session.innerHTML;
    document.getElementById("seconds").innerHTML = "00";
    timerRunning = false;
    activeTimeDisplay.style.color = "#404040";
}

let timerRunning = false;
let resumeFunctionActivation = false;
document.getElementById("play-pause").addEventListener("click", () => {

    if (timerRunning == false) {
        if (resumeFunctionActivation == false) {
            runTimer(session.innerHTML, rest.innerHTML);
            timerRunning = true;
            resumeFunctionActivation = true;
        }
        else {
            resumeTimer(session.innerHTML, rest.innerHTML);
            timerRunning = true;
            resumeFunctionActivation = false;
        }

    }
    else if (timerRunning == true) {

        clearInterval(timer);
        timerRunning = false;
        resumeFunctionActivation = true;
    }

});


function runTimer(sessionTime, breakTime) {
    activeTimeDisplay.style.color = "#404040";
    sessionTime *= 60000; //minutes to miliseconds
    breakTime *= 60000; //minutes to miliseconds

    //resume here. idk what i was doing..but we'll figure this out. i think today!

    let startTime = new Date().getTime();
    let sessionEndTime = startTime + sessionTime;
    let totEndTime = sessionEndTime + breakTime;

    timer = setInterval(calculate, 1000, sessionEndTime, totEndTime);

}

function resumeTimer(sessionTime, breakTime) {
    sessionTime *= 60000; //minutes to miliseconds
    breakTime *= 60000; //minutes to miliseconds

    let minutesLeft = parseInt(document.getElementById("minutes").innerHTML) * 60000; //minutes to miliseconds
    let secondsLeft = parseInt(document.getElementById("seconds").innerHTML) * 1000; //seconds to miliseconds
    let timeLeft = minutesLeft + secondsLeft;

    let startTime = new Date().getTime();
    let endTime = startTime + timeLeft;
    let totEndTime = endTime + breakTime;
    if (activeTimeDisplay.style.color == "green") { //this means that it's already on the break, and can ignore session

        timer = setInterval(calculate, 1000, 0, endTime);
    }
    else {

        timer = setInterval(calculate, 1000, endTime, totEndTime);
    }
}

function calculate(sessionEnd, breakEnd) {
    let minutes, seconds;
    let nowTime = new Date().getTime();

    let timeRemaining = (breakEnd - nowTime) / 1000; //in seconds
    console.log("time remaining" + timeRemaining);
    let sessionRemaining = (sessionEnd - nowTime) / 1000; //in seconds
    console.log("session end: " + sessionEnd);

    if (sessionRemaining >= 0) {
        console.log("time remaining " + timeRemaining);
        console.log("session remaining " + sessionRemaining);
        minutes = Math.floor(sessionRemaining / 60)
        seconds = Math.floor(sessionRemaining % 60);
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
    else if (timeRemaining > 0 || sessionEnd == startTime) {
        activeTimeDisplay.style.color = "green";
        minutes = Math.floor(timeRemaining / 60);
        seconds = Math.floor(timeRemaining % 60) + 1;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
    else {
        alert("time's up!")

        return;
    }
}






