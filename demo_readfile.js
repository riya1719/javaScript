var http = require('http');
var fs = require('fs');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';


var q = url.parse(adr, true);

a = "Host : " +q.host; //returns 'localhost:8080'
b = "Pathname :"+q.pathname; //returns '/default.htm'
c = "Search Query :"+q.search; //returns '?year=2017&month=february'

d  =  q.query; //returns an object: { year: 2017, month: 'february' }
 e1 = "Year : " +  d.year; 
 e2 = "Month : " + d.month; //returns 'february'

 s = a + '<br> ' + b + '<br> '  + c  +'<br> ' + e1 + '<br> '+ e2 ;

http.createServer(function (req, res) {

  fs.readFile('HTMLPage.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('HTMLPage.html', s, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });


}).listen(8080);

