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

$('#btn-get-item-code').on('click', function (){
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    var item_code = $('#item-code').val();
    console.log(item_code);
    if(item_code == '') {

    }
    else {


    }
    
    $.ajax({
        type: "POST",
        url: "getinfocode",
        data: {
            csrfmiddlewaretoken: csrftoken,
            item_code:item_code,
        },
        success: function (response) {
            $('#item-code-output').val('Mã đơn hàng: ' + item_code);
            $('#result').removeAttr('hidden');
            if(response == 'no data')
            {
                $('#item-code-status-not-find').removeAttr('hidden');
            }
            console.log(response);
        }
    })

})
startTime();