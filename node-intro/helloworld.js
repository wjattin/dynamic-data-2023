//Setup our server

//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)

const http = require('http'); //Puts the required module into a contant called http
//Define the port the app will be access from (80,8080,8888 are default to the domain /)
const port = process.env.PORT || 3000;
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

// Use the createServer() method to create an HTTP server:
const server = http.createServer( (request,response) => {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Hello World")
})

//start the server 
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop" ))
