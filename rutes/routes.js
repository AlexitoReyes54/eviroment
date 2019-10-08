var express = require('express')
var router = express.Router()
const date = require('date-and-time');

//funtions for anything
function timeLog () {
  const now = new Date();
  var log_date = date.format(now, 'ddd. YYYY/MM/DD HH:mm:ss');
  console.log("Someone vistit the page at "+log_date);
}

function sendMsg(msg) {
  const accountSid = 'AC4234120e92e3867a93bc8f6023e34ad9';
  const authToken = 'dfb00522ddb45141768cdc6898e5e38c';
  const client = require('twilio')(accountSid, authToken);

  client.messages
        .create({
           from: 'whatsapp:+14155238886',
           body: msg,
           to: 'whatsapp:+18496573947'
         })
        .then(message => console.log(message));

}

function save(json) {
  var info = require('../datos.json')
  info.push(json);
  console.log(info);
}

/*---------------Log web page--------------*/
router.get('/', function (req, res) {
  res.render("index.ejs")
  timeLog()
});

router.post('/login', (req,res) =>{
  var name = req.body.name
  const now = new Date();
  var log_date = date.format(now, 'ddd. YYYY/MM/DD HH:mm:ss');
  console.log(name+" login at "+log_date);
  res.render("form",{username:name})
});


//*----------------form rutes--------------------*
router.get('/form', (req,res) => {
  res.send("form get")
});

router.post('/form', (req,res) => {
  var name = req.body.name
  var age = req.body.age
  var nationality = req.body.nationality
  var platform = req.body.platform
  const now = new Date();
  var log_date = date.format(now, 'ddd. YYYY/MM/DD HH:mm:ss');
  var result ={
    name:name,
    age:age,
    nationality:nationality,
    platform:platform,
    date:log_date
  }
  console.log(result);
  res.send("Thanks for Your help ;)")
});

/*----------------Extra routes--------------*/
router.get('/about', function (req, res) {
  res.send('About birds')
});

module.exports = router
