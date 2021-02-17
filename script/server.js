//Variables to handle HTTP and HTTP status codes modules from node_modules 
const http = require("http");
const httpStatus = require("http-status-codes");
//variable to assign the port number to use for the web server
const port = 3000;

// Create the server
module.exports = {
    start(router) {
        const server = http.createServer();

        server.on("request", function(request, response) {
            let body = [];
            request.on("data", function(bodyData) {
                body.push(bodyData);
            });
            request.on("end", function() {
                body = Buffer.concat(body).toString();
                router.route(request, response, body);
            });
        });
        server.listen(port, hostname, function() {
            console.log(`The server has started and is listening on port number: ${port}`);
        });
    }
}









// const server = http.createServer();

// const getJSONString = function(obj) {
//     return JSON.stringify(obj, null, 2);
// }

// server.on("request", function(request, response) { //Listen for requests
//     let body = []; //Create an array to hold chunks of content/data
//     request.on("data", function(bodyData) {
//         body.push(bodyData); //Add received data to the body array
//     });

//     request.on("end", function() { //Run code when data transmission ends
//         body = Buffer.concat(body).toString(); //Convert the body array to a string of text
//         console.log(`Request Body Contents: ${body}`); //Log the requests contents to your console.
//     });

//     console.log(`Method: ${getJSONString(request.method)}`); //Log the HTTP method used
//     console.log(`URL: ${getJSONString(request.url)}`); //Log the request URL
//     console.log(`Headers: ${getJSONString(request.headers)}`); //Log request headers

//     response.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html; charset=utf-8"
//     });
    
//     let responseMessage = "<h1>This will show on the screen</h1>";
//     response.end(responseMessage); //Respond with the HTML defined in responseMessage
// });

// server.listen(port, function() {
//     console.log(`The server has started and is listening on port number: ${port}`);
// });