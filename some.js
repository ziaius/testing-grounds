var express = require('express')
var app = express()

app.set('title', 'My Site');
app.enable('trust proxy')

app.use(function (req, res, next) {
  var currentdate = new Date(); 
  var datetime =   currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  console.log('Time: %s %s', datetime, req.ip);
  next();
})

app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})