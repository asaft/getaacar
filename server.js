var express             = require('express');
const CarsController    = require('./controllers/cars-controllers')
var app                 = express();


global.rootPath = __dirname;
app.get('/',CarsController.getCsvFile )

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})