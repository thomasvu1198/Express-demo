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

$(function () {
    // this will get the full URL at the address bar
    var url = window.location.href;
    console.log(url);
    // passes on every "a" tag
    $(".sidenav a").each(function () {
        console.log(this.href);
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $('p', this).addClass("highlighted");
            //for making parent of submenu active
            // $(this).closest("p").parent().parent().addClass("highlighted");
        }
    });
});
startTime();