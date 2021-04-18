function startTime() {
    Today = new Date();
    Years = Today.getFullYear();
    Months = Today.getMonth() + 1;
    Day = Today.getDate();
    Hours = Today.getHours();
    Min = Today.getMinutes();
    Sec = Today.getSeconds();
    Hours = checkTime(Hours);
    Min = checkTime(Min);
    Sec = checkTime(Sec);
    document.getElementById("date1").innerHTML = Day + "/" + Months + "/" + Years + "\n" + Hours +
        ":" + Min + ":" + Sec;
    document.getElementById("date2").innerHTML = Day + "/" + Months + "/" + Years + "\n" + Hours +
        ":" + Min + ":" + Sec;
    document.getElementById("date3").innerHTML = Day + "/" + Months + "/" + Years + "\n" + Hours +
        ":" + Min + ":" + Sec;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

$('#btn-get-item-code').on('click')
startTime();