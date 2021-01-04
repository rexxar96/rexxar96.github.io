
var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRhNjYzNDc0ZmE3ZDU5YmI2NzEyMGFmYjhmMzk4ODUxODllNjI0M2RjYzM0NDAzNzBhNjc4NzEyYjFhMWFhNGVmYTEwYTRjOTM3NTlmYjg2In0.eyJhdWQiOiIyIiwianRpIjoiNGE2NjM0NzRmYTdkNTliYjY3MTIwYWZiOGYzOTg4NTE4OWU2MjQzZGNjMzQ0MDM3MGE2Nzg3MTJiMWExYWE0ZWZhMTBhNGM5Mzc1OWZiODYiLCJpYXQiOjE1Nzc1MTQ1ODUsIm5iZiI6MTU3NzUxNDU4NSwiZXhwIjoxNjA5MTM2OTg1LCJzdWIiOiIyNTQiLCJzY29wZXMiOltdfQ.YiB0xdr9tqBXU11VGw9rW-QZm6x8SyFW1DCoVPptul1ojxdLEP73jjcopvOBlSZU7wYL7Kd_xrqZgfTcWkNugnUOO5MF-ltGBg3UnOFvJ9weElSdl13NtHPAz8PnzMAYW82KPDqn7mEn7tKr0FU6JmFRDqd5zWvRTdRlNs7QhcafVRFRT2ofl4yF_x5tYuie-XW6KGcwwRw0KIQ_e1J4p7P88EYmcS78d1FWyxZ26pPw6poDaeQyDXHDat3IxaXO2hHwLgDJ4kpr-cL7DqX1o9SLLYyEjvdlggItTb8zAcfx2YopqzEafR4Nfkbx9SNN4YcmzHvu75Vm6nio2K3F7k5BH0hFFBF9YJEEwOthjSVF3jqzK5ejBMAgwdkDSE87dVwIsDKxwX3crh9PB-9mtyWTZKwbG8YbhcyBRmB15h83tRO5WgwhmPkPjeC2Rp_Wf18EI54XLXWeS_5bjSAbUVOdNYr8FT-ppgBBV6t0YD5P71DYwQNBoEBPqM00yR_FZNQNrbN5adabObn3YTVZnD9Xr55NAST2l0Pf4GELmT4pX-3JE7uqQ2-hGIfzB-Iw2_Cbp_j2IuEnjbOJfHQKQ-Ik3Di910HjYxS0c_9XPQI4EJjHrfgItRQks8HFn3ukK7u62nioquPPSYTtsZlMhZ_Adcs4zRannu_ByTfWNGo";
$(document).ready(function getAPI() {
    function getAPI() {
        var macaddr = "aaa9f5f5";
        var Today=new Date();
        var curDate = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
        var curTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
        Today.setMinutes(Today.getMinutes()-1);
        console.log(`realTime = ${Today.getHours()}:${Today.getMinutes()}`)
        var pastTime = Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
        //var date_filter = "?date_filter=" + curDate + " " + pastTime + "+-+" + curDate + " " + curTime;
        var date_filter = "?date_filter=" + "2020-12-30 21:20:38 " + "+-+" + " 2020-12-30 21:20:38";
        //var data_array;
        $.ajax({
            type: "POST",
            url: "https://cors-anywhere.herokuapp.com/" + "https://campus.kits.tw/api/get/data/" + macaddr + date_filter,
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
});