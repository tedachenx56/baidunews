//express app got
var express = require('express');
var app = express();
//var got = require('got');

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});

//path favicon logger cookieparse bodyparse
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

//var  mysql = require('mysql');

//route index user
var index = require('./routes/index');
//var users = require('./routes/users');
var admin2 = require('./routes/admin2');
var admin = require('./routes/admin');
//var test = require('./routes/test');
var index2 = require('./routes/index2');


app.use(express.static('./public'));
// view engine setup
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views','views');

//body-parse
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
})); // for parsing
// true: {name:vlaue} value可以为任何值
// true: {name:vlaue} value可以为只能为String或Array
app.use(cookieParser());

app.use('/', index);
//app.use('/users', users);
app.use('/admin2', admin2);
app.use('/admin', admin);
app.use('/index', index2);
//app.use('/test', test);

//app.use(/*path*/function(req, res, next) {
//	console.log('!!!request!!!');
//	next();
//})
//path path pattern  Reg Array
//path  /123
//pattern  /12?3 /1(23)+ ab\*cd
//reg  /\/abc|\/xyz/
//array ['/abcd', '/xyza', /\/lmn|\/pqr/]

//test getting request
app.use((req, res, next) => {
	console.log('!!!request!!!');
	next();
})

// catch 404 and forward to error handler
//404
//app.use((req, res, next) => {
//	var err = new Error('Not Found');
//	err.status = 404;
//	next(err);
//});

// error handler
//app.use(function(err, req, res, next) {
//// set locals, only providing error in development
//res.locals.message = err.message;
//res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//// render the error page
//res.status(err.status || 500);
//res.render('error',{});
//});

module.exports = app;