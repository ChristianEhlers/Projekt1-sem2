const handler = require("./handler");

const requestHandlers = {                   // application urls here
    GET: {
        "/index": handler.home                 // static resources
    },
    POST: {
        "/index": handler.updateBooks   // contacts data from form
    }
};

module.exports = {
    route(request, response, bodydata) {
        let arr = request.url.split(".");
        let ext = arr[arr.length - 1];
        if (typeof requestHandlers[request.method][request.url] === 'function') {   // look for route
            requestHandlers[request.method][request.url](request, response, bodydata); // if found use it
        } else if (typeof requestHandlers[request.method][ext] === "function") {
            requestHandlers[request.method][ext](request, response);
        } else {
            console.log("Error"); // If not found, log error
        }
    }
};