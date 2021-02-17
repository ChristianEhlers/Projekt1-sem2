const fs = require("fs");
const httpStatus = require("http-status-codes");
const util = require("./util");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const getAndServe = async function (response, path, content) {   // asynchronous
    await fs.readFile(path, function(err, data) {           // awaits async read
        if (err) {
            console.log(`Not found file: ${path}`);
        } else {
            response.writeHead(httpStatus.OK, {          // yes, write header
                "Content-Type": content
            });
            response.write(data);
            response.end();
        }
    });
};

module.exports = {
    home(request, response) {
        let path = request.url;
        if (path === "/") {
            path = "/index";
        }
        path = "views" + path + ".html";
        let content = "text/html; charset=utf-8";
        getAndServe(response, path, content);
    },
    updateBooks (request, response, data) {
        let obj = util.makeWebArrays(request, data);
        console.log(`${obj.POST.title}`);
    }   
}