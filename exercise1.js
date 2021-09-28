setInterval(showTime, 1000)
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let text = "AM";
    if (hour > 12) {
        hour = hour - 12;
        text = "PM";
    }
    else if (hour < 12) {
        text = "AM";
    }
    else {
        text = "noon";
        hour = 00;
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let liveTime = hour + ":" + min + ":" + sec + "  " + text;
    console.log(liveTime);
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    var curDay = time.getDate();
    var curMonth = months[time.getMonth()];
    var curYear = time.getFullYear();
    var date = curDay + " " + curMonth + " " + curYear;
    console.log(date);
    console.log(text);

    if (text === "AM") {
        document.getElementById("message").innerHTML = "GOOD MORNING";
        document.getElementById("liveTime").innerHTML = liveTime;
        document.getElementById("liveDate").innerHTML = date;
    }
    else if (text === "PM" && hour < 4) {
        document.getElementById("message").innerHTML = "GOOD AFTERNOON";
        document.getElementById("liveTime").innerHTML = liveTime;
        document.getElementById("liveDate").innerHTML = date;
    }
    else if (text === "PM" && hour > 4 && hour < 10) {
        document.getElementById("message").innerHTML = "GOOD EVENING";
        document.getElementById("liveTime").innerHTML = liveTime;
        document.getElementById("liveDate").innerHTML = date;
    }
    else if (text === "PM" && hour < 10) {
        document.getElementById("message").innerHTML = "GOOD NIGHT";
        document.getElementById("liveTime").innerHTML = liveTime;
        document.getElementById("liveDate").innerHTML = date;
    }
    else {
        document.getElementById("message").innerHTML = "GOOD NOON";
        document.getElementById("liveTime").innerHTML = liveTime;
        document.getElementById("liveDate").innerHTML = date;
    }
}
showTime();