var express = require('express')
var router = express.Router()
const date = require('date-and-time');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  const now = new Date();
  var log_date = date.format(now, 'ddd. YYYY/MM/DD HH:mm:ss');
  console.log("Someone vistit the page at "+log_date);
  next()
})


/*---------------Log web page--------------*/
router.get('/', function (req, res) {
  res.render("index.ejs")
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
  const now = new Date();
  var log_date = date.format(now, 'ddd. YYYY/MM/DD HH:mm:ss');
  var result ={
    name:name,
    age:age,
    nationality:nationality,
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
