//Variables to handle HTTP and HTTP status codes modules from node_modules 
const http = require("http");
//const httpStatus = require("http-status-codes");
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
        server.listen(port, function() {
            console.log(`The server has started and is listening on port number: ${port}`);
        });
    }
};