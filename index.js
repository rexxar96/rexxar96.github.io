var form = new FormData();
form.append("email", "yowluenlim0824@gmail.com");
form.append("password", "123456789");

var Today = new Date();
var curDate = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
var curTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
var sensor1_getData = false;
var sensor2_getData = false;

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

var cheat_data2 = [{
    "id": 7286099,
    "macaddr": "aac2949f",
    "data": null,
    "lat": null,
    "lng": null,
    "created_at": "2021-01-07 17:53:00",
    "updated_at": "2021-01-07 17:53:00",
    "temperature": null,
    "humidity": null,
    "barometer": null,
    "acc_x": "0.031",
    "acc_y": "0",
    "acc_z": "-0.062",
    "frame_cnt": 868,
    "snr": 1
}];

function result_control(){
    console.log("update picture");
    if(sensor1_getData == true){
        if(sensor2_getData == true){// both are true
            document.getElementById("wms").innerHTML = "<img src=\"both are true.png\" width = 100%/>";
            
        }
        else{ //sensor1 is true
            document.getElementById("wms").innerHTML = "<img src=\"sensor2 is true.png\" width = 100%/>";
        }
    }
    else {
        if(sensor2_getData == true){ //sensor2 is true
            document.getElementById("wms").innerHTML = "<img src=\"sensor1 is true.png\" width = 100%/>";
        }
        else{ //both are false
            document.getElementById("wms").innerHTML = "<img src=\"both are false.png\" width = 100%/>";
        }
    }
}
function main_control(data,curDate,curTime){
    console.log(data);
    document.getElementById("TIME").innerHTML = "資料更新時間: " + curDate + " " + curTime;
    if(data.length != 0){
        var len = data.length;
        console.log(len);
        console.log(data[0].acc_x);
        for(let i=0;i<len;i++){
            if(data[0]['acc_x'] != null || data[0]['acc_y'] != null || data[0]['acc_z'] != null){
                sensor1_getData = true;
                break;
            }
        }
        console.log("sensor1_getData " + sensor1_getData);

        if(sensor1_getData != false){
            //document.getElementById("wms").innerHTML = "<img src=\"working.gif\" width = 45%/>";
        }
        else{
            if(sensor1_getData == true){
                sensor1_getData = false;
                //document.getElementById("wms").innerHTML = "<img src=\"working.gif\" width = 45%/>";
            }
            else{
                //document.getElementById("wms").innerHTML = "<img src=\"idle.gif\" width = 45%/>";
            }
        }
    } 
    else {
        if(sensor1_getData == true){
            sensor1_getData = false;
            //document.getElementById("wms").innerHTML = "<img src=\"working.gif\" width = 45%/>";
        }
        else{
            //document.getElementById("wms").innerHTML = "<img src=\"idle.gif\" width = 45%/>";
        }
    }
}

function main_control2(data,curDate,curTime){
    console.log(data);
    document.getElementById("TIME").innerHTML = "資料更新時間: " + curDate + " " + curTime;
    if(data.length != 0){
        var len = data.length;
        console.log(len);
        console.log(data[0].acc_x);
        for(let i=0;i<len;i++){
            if(data[0]['acc_x'] != null || data[0]['acc_y'] != null || data[0]['acc_z'] != null){
                sensor2_getData = true;
                break;
            }
        }
        console.log("sensor2_getData " + sensor2_getData);

        if(sensor2_getData != false){
        }
        else{
            if(sensor2_getData == true){
                sensor2_getData = false;
            }
            else{
            }
        }
    } 
    else {
        if(sensor2_getData == true){
            sensor2_getData = false;
        }
        else{
        }
    }
}

//main_control(cheat_data,curDate,curTime);
//main_control2(cheat_data2,curDate,curTime);
//result_control();
var id = window.setInterval(result_control, 60000);
$(document).ready(function getAPI() {
    function getAPI(){
        var macaddr = "aaa9f5f5";
        var macaddr2 = "aac2949f";
        Today = new Date();
        curDate = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
        curTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
        Today.setMinutes(Today.getMinutes() - 3);
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

        var settings2 = {
            "url": "https://cors-anywhere.herokuapp.com/"+ "https://campus.kits.tw/api/get/data/" + macaddr2 + date_filter,
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
            var obj = eval(response);
            console.log(obj);
            main_control(obj,curDate,curTime);
        });

        $.ajax(settings2).done(function (response) {
            var obj = eval(response);
            console.log(obj);
            main_control2(obj,curDate,curTime);
        });
    }
    setInterval(getAPI, 180000);
});
