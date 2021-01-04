//載入HTTP模組
var request = require('request');

//創建HTTP 伺服器並監聽8000埠
/*http.createServer(function (request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);*/


var options = {
  'method': 'POST',
  'url': 'https://campus.kits.tw/api/get/data/aaa9f5f5?date_filter=2020-12-30 21:20:00 +-+ 2020-12-30 21:23:00',
  'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkNjBkYjVkYzEwMWVjNjFiYmQ1OWZlM2U4Y2IzNzRhMjVkZjk0ZTFkZDczOTNhNTM1NzI5NDhjYzA4MGJiMWZhNWYwZWE0NzI5NTc1ZTE1In0.eyJhdWQiOiIyIiwianRpIjoiOGQ2MGRiNWRjMTAxZWM2MWJiZDU5ZmUzZThjYjM3NGEyNWRmOTRlMWRkNzM5M2E1MzU3Mjk0OGNjMDgwYmIxZmE1ZjBlYTQ3Mjk1NzVlMTUiLCJpYXQiOjE2MDkzMzQ3NDcsIm5iZiI6MTYwOTMzNDc0NywiZXhwIjoxNjQwODcwNzQ3LCJzdWIiOiI0OTYiLCJzY29wZXMiOltdfQ.OBIpI_JiYH0IrzhgtSrAbHA-fzCXmZ7bZhN4ky-MjqlcWSaaKoIKhGgVrapADyX2Q7wsIuOndaOeohWqQNbycNSvrtGYFPWL0qvYgGkVbf0V3KkuhaTHSxXji1sgfL1sUN9EnXZnG0pLJHLBAbcJ9ZspXR8o2gRawJCv0aVvY9TDWePs9fQztn7zI0FH4epuKutyukWneZzO3TSsgSD_G-zLLb5iLTlUHPyodxWE8VXAs4Bq2wduDCV1G8oT2TvZQ5i2n-9tNHO-0GLnYnfK3GXrciyHyoReco5ugSudQLOScD9rVZOARvod3vkvKD65_3kXmGpObcEwqKunyEFe_yh80xR8NLYvVOygmqmwOaHVqYV4MgZZD4cLceC8N_ci24UoO4HUcPeo-cmoVZzi5XJ3AfXO8eBpWakfxPwssRRuvoA9rQAFAO7WKnULZRmoVDd_XIk_2qGlTQ9e0WXWSFBZumQh9Hx3vVYCpP8BudDlarnNel6l2Jyz24XqzwfKHsDtWvx-M2_eu1nAGGaHnn0RBDJ_fAPxDKwOwET9klfXUE8fI8OC-t411ZDFYR1nzrObic5fmjzWm4Ycssb4vM1yh8oCfIK42KLXWYjNYAqH0G9UkWz_dtGAhZ_WVl2aP98xz3ruK2ssxlg4Iur2BlndoKRYtSrrOED6B1fI2QM',
    'Accept': 'application/json'
  },
  formData: {
    'email': 'yowluenlim0824@gmail.com',
    'password': '123456789'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

// Print URL for accessing server
//console.log('Server running at http://127.0.0.1:8000/')