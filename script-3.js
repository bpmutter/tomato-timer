let activeTimeDisplay = document.getElementById("active-time");
let activeTimeOrig = activeTimeDisplay;

let sessionTime = parseInt(document.getElementById("session-time").innerHTML) * 6000; //from minutes to miliseconds
console.log(sessionTime);
let breakTime = parseInt(document.getElementById("break-time").innerHTML) * 6000; //from minutes to miliseconds
console.log(breakTime);

//incrementing the session timer
let session = document.getElementById("session-time");
const incrementSessionDown = document.getElementById("session-decrease");
incrementSessionDown.addEventListener("click", () => {
    if (parseInt(session.innerHTML) > 0) {

        session.innerHTML--;
    }
    else return;
})
const incrementSessionUp = document.getElementById("session-increase");
incrementSessionUp.addEventListener("click", () => {
    if (session.innerHTML > 59) {
        alert("chill, an hour is enough!");
    }
    else if (parseInt(session.innerHTML) >= 0) {

        session.innerHTML++;
    }

    else return;
});

//incrementing the break timer
let rest = document.getElementById("break-time");
const incrementBreakDown = document.getElementById("break-decrease");
incrementBreakDown.addEventListener("click", () => {
    if (parseInt(rest.innerHTML) > 0) {

        rest.innerHTML--;
    }
    else return;
})
const incrementBreakUp = document.getElementById("break-increase");
incrementBreakUp.addEventListener("click", () => {
    if (rest.innerHTML > 14) {
        alert("chill, 15 minutes is enough!");
    }
    else if (parseInt(rest.innerHTML) >= 0) {

        rest.innerHTML++;
    }
    else return;
})


function setEndTime(totTime) {
    let end = totTime * 60000 //in miliseconds
    end += new Date().getTime();
    return end;
}

function reset() {
    session.innerHTML = 25;
    rest.innerHTML = 5;
    document.getElementById("minutes").innerHTML = 25;
    document.getElementById("seconds").innerHTML = "00";
}
document.getElementById("play-pause").addEventListener("click", () => {
    countdown(setEndTime(session.innerHTML));
    countdown(setEndTime(rest.innerHTML));
});


function countdown(endTime) {

    let days, hours, minutes, seconds;

    endTime = new Date(endTime).getTime();


    setInterval(calculate, 1000);

    function calculate() {
        let startTime = new Date().getTime();

        let timeRemaining = parseInt((endTime - startTime) / 1000);

        if (timeRemaining >= 0) {
            if (timeRemaining < 120000) {
                activeTimeDisplay.style.color = "red"
            }
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }
        else {
            // activeTimeDisplay.innerHTML = "Time's Up!";
            // activeTimeDisplay.style.fontSize = "55px";

            return;
        }

    }
}






