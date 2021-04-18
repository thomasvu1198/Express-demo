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

$('#btn-get-item-code').on('click', function () {
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    var item_code = $('#item-code').val();
    console.log(item_code);
    if (item_code == '') {
        $('.alert').removeAttr('hidden');
    } else {
        $.ajax({
            type: "POST",
            url: "getinfocode",
            data: {
                csrfmiddlewaretoken: csrftoken,
                item_code: item_code,
            },
            success: function (response) {
                $('#item-code-output').text('Mã đơn hàng: ' + item_code);
                $('#result').removeAttr('hidden');
                var data = JSON.parse(JSON.stringify(response));
                var item_info = data.filter(element => element.item_code == item_code);
                if (item_info == '') {
                    $('#item-code-status-not-find').removeAttr('hidden');
                }
                else {
                    //3434343453453
                    $('#table-content').append(" <tr>
                    <td>1</td>
                    <td>Linh kiện điện tử</td>
                    <td>Trần Mạnh Tuấn</td>
                    <td>012345678</td>
                    <td>Số nhà 123, Huyện abc xyz, Tỉnh Sông Công, Thái Nguyên</td>
                    <td>Vũ Thái Sơn</td>
                    <td>0123456789</td>
                    <td>Số nhà 321, Tích Lương, Tích Lương, Thái Nguyên</td>
                    <td>3434343453453</td>
                </tr>")
                    $('.table-responsive-xl').removeAttr('hidden');
                }
                console.log(response);
            }
        })
    }



})
startTime();