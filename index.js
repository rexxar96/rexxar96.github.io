/*var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkNjBkYjVkYzEwMWVjNjFiYmQ1OWZlM2U4Y2IzNzRhMjVkZjk0ZTFkZDczOTNhNTM1NzI5NDhjYzA4MGJiMWZhNWYwZWE0NzI5NTc1ZTE1In0.eyJhdWQiOiIyIiwianRpIjoiOGQ2MGRiNWRjMTAxZWM2MWJiZDU5ZmUzZThjYjM3NGEyNWRmOTRlMWRkNzM5M2E1MzU3Mjk0OGNjMDgwYmIxZmE1ZjBlYTQ3Mjk1NzVlMTUiLCJpYXQiOjE2MDkzMzQ3NDcsIm5iZiI6MTYwOTMzNDc0NywiZXhwIjoxNjQwODcwNzQ3LCJzdWIiOiI0OTYiLCJzY29wZXMiOltdfQ.OBIpI_JiYH0IrzhgtSrAbHA-fzCXmZ7bZhN4ky-MjqlcWSaaKoIKhGgVrapADyX2Q7wsIuOndaOeohWqQNbycNSvrtGYFPWL0qvYgGkVbf0V3KkuhaTHSxXji1sgfL1sUN9EnXZnG0pLJHLBAbcJ9ZspXR8o2gRawJCv0aVvY9TDWePs9fQztn7zI0FH4epuKutyukWneZzO3TSsgSD_G-zLLb5iLTlUHPyodxWE8VXAs4Bq2wduDCV1G8oT2TvZQ5i2n-9tNHO-0GLnYnfK3GXrciyHyoReco5ugSudQLOScD9rVZOARvod3vkvKD65_3kXmGpObcEwqKunyEFe_yh80xR8NLYvVOygmqmwOaHVqYV4MgZZD4cLceC8N_ci24UoO4HUcPeo-cmoVZzi5XJ3AfXO8eBpWakfxPwssRRuvoA9rQAFAO7WKnULZRmoVDd_XIk_2qGlTQ9e0WXWSFBZumQh9Hx3vVYCpP8BudDlarnNel6l2Jyz24XqzwfKHsDtWvx-M2_eu1nAGGaHnn0RBDJ_fAPxDKwOwET9klfXUE8fI8OC-t411ZDFYR1nzrObic5fmjzWm4Ycssb4vM1yh8oCfIK42KLXWYjNYAqH0G9UkWz_dtGAhZ_WVl2aP98xz3ruK2ssxlg4Iur2BlndoKRYtSrrOED6B1fI2QM";
    $(document).ready(function getAPI() {
        function getAPI() {
            var macaddr = "?macaddr=" + "aaa9f5f5";
            var Today=new Date();
            var curDate = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
            var curTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
            Today.setMinutes(Today.getMinutes()-1);
            console.log(`realTime = ${Today.getHours()}:${Today.getMinutes()}`)
            var pastTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
            //var date_filter = "?date_filter=" + curDate + " " + pastTime + "+-+" + curDate + " " + curTime;
            var date_filter = "?date_filter=" + "2020-12-30 21:20:38 +-+ 2020-12-30 21:20:38";
            //var data_array;
            $.ajax({
                type: "POST",
                url: "https://campus.kits.tw/api/get/data/" + macaddr + date_filter,
                dataType: "json",
                async: false,
                success: function(response) {
                    console.log(response);
                    //data_array = response;
                    document.getElementById("TIME").innerHTML = "資料更新時間: " + curDate + " " + curTime;
                    if(response.length != 0){
                        var len = response.length;
                        var is_shake = -1;
                        for(i = 0; i < len; i++){
                            if(response[i]['acc_x'] != null || response[i]['acc_y'] != null || response[i]['acc_z'] != null){
                                is_shake = i;
                                break;
                            }
                        }

                        if(is_shake != -1){
                            document.getElementById("wms").innerHTML = "<img src=\"working.gif\" width = 45%/>";
                            document.getElementById("acc_x").innerHTML = response[0]['acc_x'];
                            document.getElementById("acc_y").innerHTML = response[0]['acc_y'];
                            document.getElementById("acc_z").innerHTML = response[0]['acc_z'];
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
                    delete response;
                },
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + AccessToken
                },
                error: function(jqXHR) {
                    //alert("Return status: " + jqXHR.status);
                    if(jqXHR.status == '200')
                        alert("API calling error: macaddr or url format error!");
                    else
                        alert("API is sleeping !");
                }
            })
        }
        setInterval(getAPI, 1000);
    });*/
    var form = new FormData();
form.append("email", "yowluenlim0824@gmail.com");
form.append("password", "123456789");

var settings = {
  "url": "https://campus.kits.tw/api/get/data/aaa9f5f5?date_filter=2020-12-30 21:20:38 +-+ 2020-12-30 21:20:38",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkNjBkYjVkYzEwMWVjNjFiYmQ1OWZlM2U4Y2IzNzRhMjVkZjk0ZTFkZDczOTNhNTM1NzI5NDhjYzA4MGJiMWZhNWYwZWE0NzI5NTc1ZTE1In0.eyJhdWQiOiIyIiwianRpIjoiOGQ2MGRiNWRjMTAxZWM2MWJiZDU5ZmUzZThjYjM3NGEyNWRmOTRlMWRkNzM5M2E1MzU3Mjk0OGNjMDgwYmIxZmE1ZjBlYTQ3Mjk1NzVlMTUiLCJpYXQiOjE2MDkzMzQ3NDcsIm5iZiI6MTYwOTMzNDc0NywiZXhwIjoxNjQwODcwNzQ3LCJzdWIiOiI0OTYiLCJzY29wZXMiOltdfQ.OBIpI_JiYH0IrzhgtSrAbHA-fzCXmZ7bZhN4ky-MjqlcWSaaKoIKhGgVrapADyX2Q7wsIuOndaOeohWqQNbycNSvrtGYFPWL0qvYgGkVbf0V3KkuhaTHSxXji1sgfL1sUN9EnXZnG0pLJHLBAbcJ9ZspXR8o2gRawJCv0aVvY9TDWePs9fQztn7zI0FH4epuKutyukWneZzO3TSsgSD_G-zLLb5iLTlUHPyodxWE8VXAs4Bq2wduDCV1G8oT2TvZQ5i2n-9tNHO-0GLnYnfK3GXrciyHyoReco5ugSudQLOScD9rVZOARvod3vkvKD65_3kXmGpObcEwqKunyEFe_yh80xR8NLYvVOygmqmwOaHVqYV4MgZZD4cLceC8N_ci24UoO4HUcPeo-cmoVZzi5XJ3AfXO8eBpWakfxPwssRRuvoA9rQAFAO7WKnULZRmoVDd_XIk_2qGlTQ9e0WXWSFBZumQh9Hx3vVYCpP8BudDlarnNel6l2Jyz24XqzwfKHsDtWvx-M2_eu1nAGGaHnn0RBDJ_fAPxDKwOwET9klfXUE8fI8OC-t411ZDFYR1nzrObic5fmjzWm4Ycssb4vM1yh8oCfIK42KLXWYjNYAqH0G9UkWz_dtGAhZ_WVl2aP98xz3ruK2ssxlg4Iur2BlndoKRYtSrrOED6B1fI2QM",
    "Accept": "application/json"
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});