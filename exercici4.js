var http=require('http');
var url=require('url');

function handleRequest(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>Benvinguts a node</h1>');
	response.end();

};


var server = http.createServer(handleRequest);


server.listen(3000);
console.log("Servidor iniciat");