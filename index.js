var express = require('express');
var app = express();
var cons = require('consolidate');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');



//assign ejs engine to .ejs files
app.engine('ejs', cons.ejs);

//set default ext .ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


app.post('/data', (req,res) => {
  var input = req.body.input;
  if (isNaN(input)) // this is the code I need to change
    {
      var mul = "Enter only digits";
    }
  else{
    var mul = 2*input;
  }
  console.log(mul);
  res.render('data', {mul: mul});
});

app.get('/', (req,res) => {
  res.render('index');
});


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
