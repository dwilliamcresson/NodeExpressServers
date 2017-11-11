var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(req, res) {
    
    res.end('This server works better than the governemnt! ' + req.url); 
        res.end('Server Listening on http://localhost:' + PORT + ' but at least your dog loves you.');

}
function handleRequest2(req, res) {
    
    res.end('This server works better than the governemnt! ' + req.url);
    console.log('Server Listening on http://localhost:' + PORT2 + ' you fuckass scumwhore.');
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function(){
console.log('Server Listening on http://localhost:' + PORT + ' but at least your dog loves you.');
});

server2.listen(PORT2, function(){
console.log('Server Listening on http://localhost:' + PORT2 + ' you fuckass scumwhore.');
});