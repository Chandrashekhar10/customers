var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
          
 {CompanyName: "Conntonso"},
 {TotalOffices: 12},
 {products:[{Products_Service1: "Web development"},
 {Products_Service2: "Software Devlopment and Services"}, 
 {Products_Service3: "Cloud Services"}]},
 {Iaas: "Google Cloud Platform"},
 {host: "AWS"},
           
  {client:"adas",city:"dfasf",accno:"adsd"},
  {client:"bnv",city:"tyoptr",accno:"zxzxz"}         
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})