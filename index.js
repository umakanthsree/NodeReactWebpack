var path = require('path');  
var express = require('express');  
var webpack  = require('webpack');  
var webpackMiddleware  = require('webpack-dev-middleware');  
var config = require('./webpack.config.js');

const app = express();  
const compiler = webpack(config);

app.use(express.static(__dirname ));  
app.use(webpackMiddleware(compiler));  
app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(){
	console.log('server is started is listening at: 3000');
});  