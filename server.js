cat server.js 
let http = require('http');
let server = new http.Server(); //создание объекта Http Server
let cnr = 0; // Переменная одна на все запросы!
//server.listen(3000, '127.0.0.1'); // прослушивание
//server.listen(3000, '0.0.0.0'); // прослушивание
server.listen(80, '0.0.0.0'); // прослушивание
//server.listen(80); // прослушивание
server.on('request', function (req, resp) { //событие запроса на сервер
    let msg = 'zaglyada.pp.ua; ' + new Date() + '; cnr=' + (cnr++) + '; url=' + req.url;
    console.log(msg);
    resp.write(msg);
    resp.end();
});