const express = require('express');
const app = express();
const path = require('path');
var rutes = require('./rutes/routes.js')

//setters and use
app.set("port",8080);
app.set("view engine","ejs")
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set("/views",path.join(__dirname, 'views'))
app.use(express.urlencoded())

//imported routes
app.use('/',rutes)

//server listen
app.listen(app.get("port"),function() {
  console.log("server on port "+app.get("port"));
})
