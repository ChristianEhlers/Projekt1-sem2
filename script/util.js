const querystring = require("querystring"); // file system access

exports.makeWebArrays = function (request, data) {
    let get = request.url.split("?");
    let qs = "";
    if (get.length === 2) {
        qs = get[1];
    }

    let GET = querystring.parse(qs);
    let POST = querystring.parse(data);
    return { GET, POST };
}