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

function removeactiveclass() {
    $(".nav-link.active").removeClass('nav-link active').addClass('nav-link');
    // console.log($('.nav-link.active').length);
};



function General_ajaxCall() {
    $(document).ready(function () {
        var url = window.location.href;
        url_home = $(".sidenav a").get(1).href;
        url_bangtay = $(".sidenav a").get(2).href;
        if (url == url_home) {
            $.ajax({
                type: "GET",
                url: "request/datajson/general",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    $("#temperature_data").text(response[response.length - 1].temp + "°C");
                    $("#light_data").text(response[response.length - 1].light + " LUX");
                    $("#tank_data").text(response[response.length - 1].tank + "%");
                    if (response[response.length - 1].pump1_status == 0) {
                        $("#pump1_status").text("OFF");
                    }
                    if (response[response.length - 1].pump1_status == 1) {
                        $("#pump1_status").text("ON");
                    }
                    if (response[response.length - 1].pump2_status == 0) {
                        $("#pump2_status").text("OFF");
                    }
                    if (response[response.length - 1].pump2_status == 1) {
                        $("#pump2_status").text("ON");
                    }

                }
            });
        }
        if (url == url_bangtay) {
            $.ajax({
                type: "GET",
                url: "request/datajson/general",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    if (response[response.length - 1].pump1_status == 0) {
                        $("#pump1_mode_btn").prop("checked", false);
                    }
                    if (response[response.length - 1].pump1_status == 1) {
                        $("#pump1_mode_btn").prop("checked", true);
                    }
                    if (response[response.length - 1].pump2_status == 0) {
                        $("#pump2_mode_btn").prop("checked", false);
                    }
                    if (response[response.length - 1].pump2_status == 1) {
                        $("#pump2_mode_btn").prop("checked", true);
                    }
                }
            })
        }

    });
};


function Particular_ajaxCall() {
    $(document).ready(function () {
        var url = window.location.href;
        url_home = $(".sidenav a").get(1).href;
        url_tudong = $(".sidenav a").get(0).href;
        url_bangtay = $(".sidenav a").get(2).href;
        if (url == url_home) {
            $.ajax({
                type: "GET",
                url: "request/datajson/particular",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    var data = JSON.parse(JSON.stringify(response));
                    var kv1 = data.filter(element => element.kv == 1);
                    var kv2 = data.filter(element => element.kv == 2);
                    var kv3 = data.filter(element => element.kv == 3);
                    var kv4 = data.filter(element => element.kv == 4);
                    $("#kv1_humid_data_display").text(kv1[kv1.length - 1].humidity + "%");
                    $("#kv2_humid_data_display").text(kv2[kv2.length - 1].humidity + "%");
                    $("#kv3_humid_data_display").text(kv3[kv3.length - 1].humidity + "%");
                    $("#kv4_humid_data_display").text(kv4[kv4.length - 1].humidity + "%");
                    id = $(".nav-link.active").attr('id');
                    if (id == "kv1_water_status_display") {
                        if (kv1[kv1.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv1[kv1.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv1[kv1.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv1[kv1.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }


                    }
                    if (id == "kv2_water_status_display") {
                        if (kv2[kv2.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv2[kv2.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv2[kv2.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv2[kv2.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }
                    if (id == "kv3_water_status_display") {
                        if (kv3[kv3.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv3[kv3.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv3[kv3.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv3[kv3.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }
                    if (id == "kv4_water_status_display") {
                        if (kv4[kv4.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv4[kv4.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv4[kv4.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv4[kv4.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }

                }
            });
        }
        if (url == url_tudong) {
            $.ajax({
                type: "GET",
                url: "request/datajson/particular",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    var data = JSON.parse(JSON.stringify(response));
                    var kv1 = data.filter(element => element.kv == 1);
                    var kv2 = data.filter(element => element.kv == 2);
                    var kv3 = data.filter(element => element.kv == 3);
                    var kv4 = data.filter(element => element.kv == 4);
                    kv1_ps = kv1[kv1.length - 1].ps_mode
                    kv2_ps = kv2[kv2.length - 1].ps_mode
                    kv3_ps = kv3[kv3.length - 1].ps_mode
                    kv4_ps = kv4[kv4.length - 1].ps_mode

                    kv1_ng = kv1[kv1.length - 1].ng_mode
                    kv2_ng = kv2[kv2.length - 1].ng_mode
                    kv3_ng = kv3[kv3.length - 1].ng_mode
                    kv4_ng = kv4[kv4.length - 1].ng_mode

                    //phun suong
                    if (kv1_ps == 1) {
                        $("#ps_check_kv1").prop("checked", true);
                    } else {
                        $("#ps_check_kv1").prop("checked", false);
                    }

                    if (kv2_ps == 1) {
                        $("#ps_check_kv2").prop("checked", true);
                    } else {
                        $("#ps_check_kv2").prop("checked", false);
                    }

                    if (kv3_ps == 1) {
                        $("#ps_check_kv3").prop("checked", true);
                    } else {
                        $("#ps_check_kv3").prop("checked", false);
                    }

                    if (kv4_ps == 1) {
                        $("#ps_check_kv4").prop("checked", true);
                    } else {
                        $("#ps_check_kv4").prop("checked", false);
                    }
                    //-----------------------------------------------------------//
                    //nho giot
                    if (kv1_ng == 1) {
                        $("#ng_check_kv1").prop("checked", true);
                    } else {
                        $("#ng_check_kv1").prop("checked", false);
                    }

                    if (kv2_ng == 1) {
                        $("#ng_check_kv2").prop("checked", true);
                    } else {
                        $("#ng_check_kv2").prop("checked", false);
                    }

                    if (kv3_ng == 1) {
                        $("#ng_check_kv3").prop("checked", true);
                    } else {
                        $("#ng_check_kv3").prop("checked", false);
                    }

                    if (kv4_ng == 1) {
                        $("#ng_check_kv4").prop("checked", true);
                    } else {
                        $("#ng_check_kv4").prop("checked", false);
                    }
                }
            })
        }

        if (url == url_bangtay) {
            $.ajax({
                type: "GET",
                url: "request/datajson/particular",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    var data = JSON.parse(JSON.stringify(response));
                    var kv1 = data.filter(element => element.kv == 1);
                    var kv2 = data.filter(element => element.kv == 2);
                    var kv3 = data.filter(element => element.kv == 3);
                    var kv4 = data.filter(element => element.kv == 4);
                    kv1_ps = kv1[kv1.length - 1].ps_mode
                    kv2_ps = kv2[kv2.length - 1].ps_mode
                    kv3_ps = kv3[kv3.length - 1].ps_mode
                    kv4_ps = kv4[kv4.length - 1].ps_mode

                    kv1_ng = kv1[kv1.length - 1].ng_mode
                    kv2_ng = kv2[kv2.length - 1].ng_mode
                    kv3_ng = kv3[kv3.length - 1].ng_mode
                    kv4_ng = kv4[kv4.length - 1].ng_mode

                    //phun suong
                    if (kv1_ps == 1) {
                        $("#ps_check_kv1").prop("checked", true);
                    } else {
                        $("#ps_check_kv1").prop("checked", false);
                    }

                    if (kv2_ps == 1) {
                        $("#ps_check_kv2").prop("checked", true);
                    } else {
                        $("#ps_check_kv2").prop("checked", false);
                    }

                    if (kv3_ps == 1) {
                        $("#ps_check_kv3").prop("checked", true);
                    } else {
                        $("#ps_check_kv3").prop("checked", false);
                    }

                    if (kv4_ps == 1) {
                        $("#ps_check_kv4").prop("checked", true);
                    } else {
                        $("#ps_check_kv4").prop("checked", false);
                    }
                    //-----------------------------------------------------------//
                    //nho giot
                    if (kv1_ng == 1) {
                        $("#ng_check_kv1").prop("checked", true);
                    } else {
                        $("#ng_check_kv1").prop("checked", false);
                    }

                    if (kv2_ng == 1) {
                        $("#ng_check_kv2").prop("checked", true);
                    } else {
                        $("#ng_check_kv2").prop("checked", false);
                    }

                    if (kv3_ng == 1) {
                        $("#ng_check_kv3").prop("checked", true);
                    } else {
                        $("#ng_check_kv3").prop("checked", false);
                    }

                    if (kv4_ng == 1) {
                        $("#ng_check_kv4").prop("checked", true);
                    } else {
                        $("#ng_check_kv4").prop("checked", false);
                    }
                }
            })
        }
    });
};



$(function () {
    $(".nav-link").on('click', function () {
        removeactiveclass();
        id = this.id;
        var url = window.location.href;
        url_home = $(".sidenav a").get(1).href;
        url_tudong = $(".sidenav a").get(0).href;
        url_bangtay = $(".sidenav a").get(2).href;
        $(this).removeClass('nav-link').addClass('nav-link active');
        if (url == url_home) {
            $.ajax({
                type: "GET",
                url: "request/datajson/particular",
                // context: document.body,
                contentType: 'application/json',
                success: function (response) {
                    var data = JSON.parse(JSON.stringify(response));
                    var kv1 = data.filter(element => element.kv == 1);
                    var kv2 = data.filter(element => element.kv == 2);
                    var kv3 = data.filter(element => element.kv == 3);
                    var kv4 = data.filter(element => element.kv == 4);
                    if (id == "kv1_water_status_display") {
                        if (kv1[kv1.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv1[kv1.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv1[kv1.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv1[kv1.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }


                    }
                    if (id == "kv2_water_status_display") {
                        if (kv2[kv2.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv2[kv2.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv2[kv2.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv2[kv2.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }
                    if (id == "kv3_water_status_display") {
                        if (kv3[kv3.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv3[kv3.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv3[kv3.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv3[kv3.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }
                    if (id == "kv4_water_status_display") {
                        if (kv4[kv4.length - 1].ps_mode == 1) {
                            $("#ps_status_display").text('ON');
                        }
                        if (kv4[kv4.length - 1].ps_mode == 0) {
                            $("#ps_status_display").text('OFF');
                        }
                        if (kv4[kv4.length - 1].ng_mode == 1) {
                            $("#ng_status_display").text('ON');
                        }
                        if (kv4[kv4.length - 1].ng_mode == 0) {
                            $("#ng_status_display").text('OFF');
                        }

                    }

                }
            });
        }

    });
});

$('#set-temp-btn').on("click", function (e) {
    e.preventDefault();
    Data = $("#temp-data").val();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    console.log(Data);
    $.ajax({
        type: "POST",
        url: "add_temp",
        data: {
            csrfmiddlewaretoken: csrftoken,
            'temp': Data,
        },
        success: function (response) {
            console.log(response);
        }
    })

});

$('#set-humid-btn').on("click", function (e) {
    e.preventDefault();
    kv1_humid = $('#humid-data-kv1').val();
    kv2_humid = $('#humid-data-kv2').val();
    kv3_humid = $('#humid-data-kv3').val();
    kv4_humid = $('#humid-data-kv4').val();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    console.log(kv1_humid);
    console.log(kv2_humid);
    console.log(kv3_humid);
    console.log(kv4_humid);
    $.ajax({
        type: "POST",
        url: "add_humid",
        data: {
            csrfmiddlewaretoken: csrftoken,
            'kv1_humid': kv1_humid,
            'kv2_humid': kv2_humid,
            'kv3_humid': kv3_humid,
            'kv4_humid': kv4_humid,
        },
        success: function (response) {
            console.log(response);
        }
    })

});

// // Check #x
// $( "#x" ).prop( "checked", true );

// // Uncheck #x
// $( "#x" ).prop( "checked", false );
// ----------------------------------------------------ps mode button-----------------------------//
$('#ps_check_kv1').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 1
            },
            success: function (response) {
                console.log("phun suong kv1 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 1
            },
            success: function (response) {
                console.log("phun suong kv1 OFF")
                console.log(response);
            }
        })
    }
});


$('#ps_check_kv2').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 2
            },
            success: function (response) {
                console.log("phun suong kv2 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 2
            },
            success: function (response) {
                console.log("phun suong kv2 OFF")
                console.log(response);
            }
        })
    }
});

$('#ps_check_kv3').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 3
            },
            success: function (response) {
                console.log("phun suong kv3 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 3
            },
            success: function (response) {
                console.log("phun suong kv3 OFF")
                console.log(response);
            }
        })
    }
});


$('#ps_check_kv4').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 4
            },
            success: function (response) {
                console.log("phun suong kv1 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ps_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 4
            },
            success: function (response) {
                console.log("phun suong kv4 OFF")
                console.log(response);
            }
        })
    }
});

//---------------------------------------------------------ng mode button--------------------------
$('#ng_check_kv1').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 1
            },
            success: function (response) {
                console.log("nho giot kv1 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 1
            },
            success: function (response) {
                console.log("nho giot kv1 OFF")
                console.log(response);
            }
        })
    }
});


$('#ng_check_kv2').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 2
            },
            success: function (response) {
                console.log("nho giot kv2 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 2
            },
            success: function (response) {
                console.log("nho giot kv2 OFF")
                console.log(response);
            }
        })
    }
});

$('#ng_check_kv3').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 3
            },
            success: function (response) {
                console.log("nho giot kv3 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 3
            },
            success: function (response) {
                console.log("nho giot kv3 OFF")
                console.log(response);
            }
        })
    }
});


$('#ng_check_kv4').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 1,
                'kv': 4
            },
            success: function (response) {
                console.log("nho giot kv4 ON")
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "ng_mode_change",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'mode': 0,
                'kv': 4
            },
            success: function (response) {
                console.log("nho giot kv4 OFF")
                console.log(response);
            }
        })
    }
});







//--------------------------------- nutri card----------------------------------//
$('#kv1_nutri_water').on("click", function () {
    $('#nutri-card-body').removeAttr('hidden');
    $.ajax({
        type: "GET",
        url: "NutriJson",
        contentType: 'application/json',
        success: function (response) {
            if (response.length != 0) {
                var data = JSON.parse(JSON.stringify(response));
                var kv1 = data.filter(element => element.kv == 1);
                if (kv1.length != 0) {
                    status = kv1[kv1.length - 1].status_supply;
                    if (status == 1) {
                        $("#amount-of-water").text(kv1[kv1.length - 1].water_mix);
                        $("#time-supply").text(kv1[kv1.length - 1].duration);
                    }
                }

            }

            // console.log(response.length);
        }
    })

});

$('#kv2_nutri_water').on("click", function () {
    $('#nutri-card-body').removeAttr('hidden');
    $.ajax({
        type: "GET",
        url: "NutriJson",
        contentType: 'application/json',
        success: function (response) {
            if (response.length != 0) {
                var data = JSON.parse(JSON.stringify(response));
                var kv2 = data.filter(element => element.kv == 2);
                if (kv2.length != 0) {
                    status = kv2[kv2.length - 1].status_supply;
                    if (status == 1) {
                        $("#amount-of-water").text(kv2[kv2.length - 1].water_mix);
                        $("#time-supply").text(kv2[kv2.length - 1].duration);
                    }
                }

            }
        }
    })

});

$('#kv3_nutri_water').on("click", function () {
    $('#nutri-card-body').removeAttr('hidden');
    $.ajax({
        type: "GET",
        url: "NutriJson",
        contentType: 'application/json',
        success: function (response) {
            if (response.length != 0) {
                var data = JSON.parse(JSON.stringify(response));
                var kv3 = data.filter(element => element.kv == 3);
                if (kv3.length != 0) {
                    status = kv3[kv3.length - 1].status_supply;
                    if (status == 1) {
                        $("#amount-of-water").text(kv3[kv3.length - 1].water_mix);
                        $("#time-supply").text(kv3[kv3.length - 1].duration);
                    }
                }
            }

            // console.log(response.length);
        }
    })

});

$('#kv4_nutri_water').on("click", function () {
    $('#nutri-card-body').removeAttr('hidden');
    $.ajax({
        type: "GET",
        url: "NutriJson",
        contentType: 'application/json',
        success: function (response) {
            if (response.length != 0) {
                var data = JSON.parse(JSON.stringify(response));
                var kv4 = data.filter(element => element.kv == 4);
                if (kv4.length != 0) {
                    status = kv4[kv4.length - 1].status_supply;
                    if (status == 1) {
                        $("#amount-of-water").text(kv4[kv4.length - 1].water_mix);
                        $("#time-supply").text(kv4[kv4.length - 1].duration);
                    }
                }
            }

            // console.log(response.length);
        }
    })

});

//hit button on off
$('#btn-supply-on-off').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        id_kv_tag = $('.nav-link.active').attr('id');
        water_data = $('#amount-of-water').val();
        duration = $('#time-supply').val();
        if (id_kv_tag == "kv1_nutri_water" && water_data != '' && duration != '') {
            $.ajax({
                type: "POST",
                url: "NutriJson",
                data: {
                    csrfmiddlewaretoken: csrftoken,
                    'water_data': water_data,
                    'duration': duration,
                    'kv': 1,
                    'mode': 1
                },
                success: function (response) {
                    console.log(response);
                }
            })
        }
        if (id_kv_tag == "kv2_nutri_water" && water_data != '' && duration != '') {
            $.ajax({
                type: "POST",
                url: "NutriJson",
                data: {
                    csrfmiddlewaretoken: csrftoken,
                    'water_data': water_data,
                    'duration': duration,
                    'kv': 2,
                    'mode': 1
                },
                success: function (response) {
                    console.log(response);
                }
            })
        }
        if (id_kv_tag == "kv3_nutri_water" && water_data != '' && duration != '') {
            $.ajax({
                type: "POST",
                url: "NutriJson",
                data: {
                    csrfmiddlewaretoken: csrftoken,
                    'water_data': water_data,
                    'duration': duration,
                    'kv': 3,
                    'mode': 1
                },
                success: function (response) {
                    console.log(response);
                }
            })
        }
        if (id_kv_tag == "kv4_nutri_water" && water_data != '' && duration != '') {
            $.ajax({
                type: "POST",
                url: "NutriJson",
                data: {
                    csrfmiddlewaretoken: csrftoken,
                    'water_data': water_data,
                    'duration': duration,
                    'kv': 4,
                    'mode': 1
                },
                success: function (response) {
                    console.log(response);
                }
            })
        }

    } else {
        $.ajax({
            type: "POST",
            url: "NutriJson",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'water_data': water_data,
                'duration': duration,
                'kv': 4,
                'mode': 0
            },
            success: function (response) {
                console.log(response);
            }
        })
    }

})

$('#btn-supply-on-off').on('click', function (e) {
    var checkbox = $(this);
    if (checkbox.is(":checked")) {
        e.preventDefault();
        // $(this).prop("disabled", true);
        $('.alert.alert-warning.alert-dismissible.fade.show').removeAttr('hidden');
        if ($('#close').data('clicked', true)) {
            $('#btn-supply-on-off').unbind('click');
        }
    }

});



$('#pump1_mode_btn').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "Pumpmode",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'status': 1,
                'pump': 1
            },
            success: function (response) {
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "Pumpmode",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'status': 0,
                'pump': 1
            },
            success: function (response) {
                console.log(response);
            }
        })
    }
})

$('#pump2_mode_btn').on('change', function (e) {
    e.preventDefault();
    var csrftoken = $("input[name=csrfmiddlewaretoken]").val();
    if ($(this).prop("checked") == true) {
        $.ajax({
            type: "POST",
            url: "Pumpmode",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'status': 1,
                'pump': 2
            },
            success: function (response) {
                console.log(response);
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "Pumpmode",
            data: {
                csrfmiddlewaretoken: csrftoken,
                'status': 0,
                'pump': 2
            },
            success: function (response) {
                console.log(response);
            }
        })
    }
})



//------------------------------------------------pump file -------------------------------------//


Particular_ajaxCall();
General_ajaxCall();
setInterval(General_ajaxCall, 3000);
setInterval(Particular_ajaxCall, 3000);
startTime();