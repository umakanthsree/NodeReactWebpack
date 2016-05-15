var path = require('path');  
var express = require('express');  
var webpack  = require('webpack');  
var webpackMiddleware  = require('webpack-dev-middleware');  
var config = require('./webpack.config.js');
var bodyParser = require('body-parser');
var fs = require('fs');

const app = express();  
const compiler = webpack(config);

app.use(express.static(__dirname ));  
app.use(webpackMiddleware(compiler));  
app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getUsersList', function (req,res){
	console.log('getUsersList');
	fs.readFile( __dirname + "/app/" + "users.json", 'utf8', function (err, data) {
       console.log( 'readFile',data );
       // res.status(200);
       // res.setHeader('Content-Type', 'application/json');
       // // res.send(JSON.stringify({ a: 1 }));
       // res.json({ a: 1 });
       res.status(200).send(data);
   });
	
});


app.listen(3000, function(){
	console.log('server is started is listening at: 3000');
});  