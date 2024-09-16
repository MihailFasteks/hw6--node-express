var express = require('express');

var app = express();
var path = require('path');
const fs = require('fs');
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'pages/index.html')); 
});
app.post('/submit', function(req, res){ 
    const email = req.body.eml;
    const password = req.body.pswrd;
    
  
    fs.appendFile('inf.txt', `Email: ${email}, Password: ${password}\n`, function(err) {
        if (err) {
            console.error('Ошибка записи в файл', err);
            return res.status(500).send('Ошибка сервера');
        }
        
      
        res.redirect('/index.html');
    });
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
app.get('/product/:productN/price/:price', function(request, response){
var product=request.params['productN'];
 var price=request.params['price'];
    fs.appendFile('products.txt', `product: ${product}, price: ${price}\n`, function(err) {
        if (err) {
            console.error('Ошибка записи в файл', err);
            return res.status(500).send('Ошибка сервера');
        }
        
      
        response.sendFile(path.join(__dirname,'pages/index.html')); 
    });
});
app.listen(8080, function(){
    console.log('Server started on port: 8080');
})