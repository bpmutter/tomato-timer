

let timeWorking = 25; //in minutes
let timeBreak = 5; //in minutes
let totTime = (timeWorking + timeBreak) * 60


let timeKeeper = function (sessionTime, breakTime) {

    let startTime = getTimeSeconds(); //all the elapsed minutes in the day
    let totTime = sessionTime + breakTime;
    totTime *= 60; //time in seconds
    let endTime = startTime + totTime;

    console.log("start time: " + startTime + ", tot time : " + totTime + ", endtime: " + endTime);

    for (let i = startTime; i <= endTime; i = getTimeSeconds()) {
        let timeElapsed = getTimeSeconds() - startTime;
        setInterval(console.log(timeElapsed), 100000);
    }

}


let getTimeSeconds = function () {
    let minutesNow = new Date().getMinutes();
    let hoursNow = new Date().getHours();
    let secondsNow = new Date().getSeconds();
    let timeSeconds = secondsNow + minutesNow * 60 + hoursNow * 3600;
    return timeSeconds;
}
timeKeeper(25, 5)

//Decrement function decrement the value.
// function decrement(mins) {
//     let minutes = document.getElementById(mins).value;
//     let seconds = minutes * 60;
//     console.log(minutes + ":" + seconds);

//     // //if less than a minute remaining
//     // //Display only seconds value.
//     // if (seconds < 59) {
//     //     return "0:"+seconds;
//     // }

//     // //Display both minutes and seconds
//     // //getminutes and getseconds is used to
//     // //get minutes and seconds
//     // else {
//     //     return minutes+":"+seconds;
//     // }
//     // //when less than a minute remaining
//     // //colour of the minutes and seconds
//     // //changes to red
//     // if (mins < 1) {
//     //     minutes.style.color = "red";
//     //     seconds.style.color = "red";
//     // }
//     // //if seconds becomes zero,
//     // //then page alert time up
//     // if (mins < 0) {
//     //     alert('time up');
//     //     minutes.value = 0;
//     //     seconds.value = 0;
//     // }
//     // //if seconds > 0 then seconds is decremented
//     // else {
//     //     secs--;
//     //     setTimeout('decrement()', 1000);
//     // }

// }
// decrement(sessionTime);

// function getminutes() {
//     //minutes is seconds divided by 60, rounded down
//     mins = Math.floor(secs / 60);
//     return mins;
// }

// function getseconds() {
//     //take minutes remaining (as seconds) away
//     //from total seconds remaining
//     return secs - Math.round(mins * 60);
// }


// function decrement(minutes) {

//     seconds = minutes * 60;

//     //if less than a minute remaining
//     //Display only seconds value.
//     if (seconds < 59) {
//         seconds.value = secs;
//     }

//     //Display both minutes and seconds
//     //getminutes and getseconds is used to
//     //get minutes and seconds
//     else {
//         minutes.value = getminutes();
//         seconds.value = getseconds();
//     }
//     //when less than a minute remaining
//     //colour of the minutes and seconds
//     //changes to red
//     if (mins < 1) {
//         minutes.style.color = "red";
//         seconds.style.color = "red";
//     }
//     //if seconds becomes zero,
//     //then page alert time up
//     if (mins < 0) {
//         alert('time up');
//         minutes.value = 0;
//         seconds.value = 0;
//     }
//     //if seconds > 0 then seconds is decremented
//     else {
//         secs--;
//         setTimeout('Decrement()', 1000);
//     }

// }

// function getminutes() {
//     //minutes is seconds divided by 60, rounded down
//     mins = Math.floor(secs / 60);
//     return mins;
// }

// function getseconds() {
//     //take minutes remaining (as seconds) away
//     //from total seconds remaining
//     return secs - Math.round(mins * 60);
// }
