var form = new FormData();
form.append("email", "yowluenlim0824@gmail.com");
form.append("password", "123456789");
var cheat_data = [{
    "id": 6950426,
    "macaddr": "aaa9f5f5",
    "data": null,
    "lat": null,
    "lng": null,
    "created_at": "2020-12-30 21:20:38",
    "updated_at": "2020-12-30 21:20:38",
    "temperature": null,
    "humidity": null,
    "barometer": null,
    "acc_x": "0.015",
    "acc_y": "0.173",
    "acc_z": "-0.125",
    "frame_cnt": 555,
    "snr": -17   
}];

function main_control(data){
    console.log(data);
    document.getElementById("TIME").innerHTML = "資料更新時間: " + curDate + " " + curTime;
    if(data.length > 2){
        var len = data.length;
        var is_shake = -1;
        console.log(len);
        console.log(data[0]['acc_x']);
        for(i = 0; i < len; i++){
            if(data[i]['acc_x'] != null || data[i]['acc_y'] != null || data[i]['acc_z'] != null){
                is_shake = i;
                break;
            }
        }
        console.log("shake: " + is_shake);

        if(is_shake != -1){
            document.getElementById("wms").innerHTML = "<img src=\"working.gif\" width = 45%/>";
            document.getElementById("acc_x").innerHTML = data[0]['acc_x'];
            document.getElementById("acc_y").innerHTML = data[0]['acc_y'];
            document.getElementById("acc_z").innerHTML = data[0]['acc_z'];
        }else{
            document.getElementById("wms").innerHTML = "<img src=\"idle.gif\" width = 45%/>";
            document.getElementById("acc_x").innerHTML = "NULL";
            document.getElementById("acc_y").innerHTML = "NULL";
            document.getElementById("acc_z").innerHTML = "NULL";
        }

    } else {
            document.getElementById("acc_x").innerHTML = "No data";
            document.getElementById("acc_y").innerHTML = "No data";
            document.getElementById("acc_z").innerHTML = "No data";
            document.getElementById("wms").innerHTML = "<img src=\"idle.gif\" width = 45%/>";
    }
}

window.onload = main_control(cheat_data);

$(document).ready(function getAPI() {
    function getAPI(){
        var macaddr = "aaa9f5f5";
        var Today = new Date();
        var curDate = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
        var curTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
        Today.setMinutes(Today.getMinutes()-2);
        console.log(`realTime = ${Today.getHours()}:${Today.getMinutes()}`)
        var pastTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
        var date_filter = "?date_filter=" + curDate + " " + pastTime + "+-+" + curDate + " " + curTime;
        //var date_filter = "?date_filter=" + "2020-12-30 21:18:38 +-+ 2020-12-30 21:20:38";
        console.log(macaddr);
        console.log(date_filter);
        var settings = {
            "url": "https://cors-anywhere.herokuapp.com/"+ "https://campus.kits.tw/api/get/data/" + macaddr + date_filter,
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkNjBkYjVkYzEwMWVjNjFiYmQ1OWZlM2U4Y2IzNzRhMjVkZjk0ZTFkZDczOTNhNTM1NzI5NDhjYzA4MGJiMWZhNWYwZWE0NzI5NTc1ZTE1In0.eyJhdWQiOiIyIiwianRpIjoiOGQ2MGRiNWRjMTAxZWM2MWJiZDU5ZmUzZThjYjM3NGEyNWRmOTRlMWRkNzM5M2E1MzU3Mjk0OGNjMDgwYmIxZmE1ZjBlYTQ3Mjk1NzVlMTUiLCJpYXQiOjE2MDkzMzQ3NDcsIm5iZiI6MTYwOTMzNDc0NywiZXhwIjoxNjQwODcwNzQ3LCJzdWIiOiI0OTYiLCJzY29wZXMiOltdfQ.OBIpI_JiYH0IrzhgtSrAbHA-fzCXmZ7bZhN4ky-MjqlcWSaaKoIKhGgVrapADyX2Q7wsIuOndaOeohWqQNbycNSvrtGYFPWL0qvYgGkVbf0V3KkuhaTHSxXji1sgfL1sUN9EnXZnG0pLJHLBAbcJ9ZspXR8o2gRawJCv0aVvY9TDWePs9fQztn7zI0FH4epuKutyukWneZzO3TSsgSD_G-zLLb5iLTlUHPyodxWE8VXAs4Bq2wduDCV1G8oT2TvZQ5i2n-9tNHO-0GLnYnfK3GXrciyHyoReco5ugSudQLOScD9rVZOARvod3vkvKD65_3kXmGpObcEwqKunyEFe_yh80xR8NLYvVOygmqmwOaHVqYV4MgZZD4cLceC8N_ci24UoO4HUcPeo-cmoVZzi5XJ3AfXO8eBpWakfxPwssRRuvoA9rQAFAO7WKnULZRmoVDd_XIk_2qGlTQ9e0WXWSFBZumQh9Hx3vVYCpP8BudDlarnNel6l2Jyz24XqzwfKHsDtWvx-M2_eu1nAGGaHnn0RBDJ_fAPxDKwOwET9klfXUE8fI8OC-t411ZDFYR1nzrObic5fmjzWm4Ycssb4vM1yh8oCfIK42KLXWYjNYAqH0G9UkWz_dtGAhZ_WVl2aP98xz3ruK2ssxlg4Iur2BlndoKRYtSrrOED6B1fI2QM",
              "Accept": "application/json",
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };
          
        $.ajax(settings).done(function (response) {
            main_control(response);
        });

    }
    //setInterval(getAPI, 120000);
});
