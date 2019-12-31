const getTimeSeconds = function () {
    let minutesNow = new Date().getMinutes();
    let hoursNow = new Date().getHours();
    let secondsNow = new Date().getSeconds();
    let timeSeconds = secondsNow + minutesNow * 60 + hoursNow * 3600;
    return timeSeconds;
}
const start = getTimeSeconds();
console.log(start);
let end = start + 90;

// Update the count down every 1 second

const timeKeeper = function (startTime, endTime) {
    // Find the distance between now and the count down date
    var distance = end - start;

    // Time calculations for days, hours, minutes and seconds

    var minutes = Math.floor(distance / 60);
    var seconds = distance % 60;

    // Display the result in the element with id="demo"
    document.getElementById("active-time").innerHTML = minutes + "m " + seconds + "s ";
    distance--;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timeKeeper);
        document.getElementById("active-time").innerHTML = "EXPIRED";
    }
}
let updateCountDown = setInterval(timeKeeper(start, end), 1000);



