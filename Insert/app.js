'use strict';

require('dotenv').config({
  path: __dirname + '/../.env'
});

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
var routes =require('./routes/index');

app.use(bodyParser.json()); // for parsing POST req
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', __dirname + '/views'); // Render on browser
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/views'));
app.use('/',routes);
const server = app.listen(process.env.PORT || 5050, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});


/*app.get('/',function(req,res){
res.render('index');})	

app.get('/index',function(req,res){
res.render('index');
});
app.post('/index',function(req,res){
console.log(req.body);
res.render('index');
});

//res.send('index');
//res.end();
//;})

*/

