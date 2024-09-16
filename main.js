var express = require('express');
// создаем приложение, которое будет принимать запросы, обрабатывать их, и отправлять ответы
var app = express();
var path = require('path');
// обработчик, который будет срабатывать на get запросы, для маршрута '/'
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'pages/index.html')); 
});
app.get('/index.html', function(req, res){
    res.sendFile(path.join(__dirname,'pages/index.html')); 
});
app.get('/news.html', function(req, res){
    res.sendFile(path.join(__dirname,'pages/news.html')); 
});
app.get('/about.html', function(req, res){
    res.sendFile(path.join(__dirname,'pages/about.html')); 
});
app.get('/register.html', function(req, res){
    res.sendFile(path.join(__dirname,'pages/register.html')); 
});
app.get('/login.html', function(req, res){
    res.sendFile(path.join(__dirname,'pages/login.html')); 
});

app.listen(8080, function(){
    console.log('Server started on port: 8080');
})