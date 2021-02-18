const fs = require("fs");
const httpStatus = require("http-status-codes");
const util = require("./util");
const xml2js = require("xml2js");

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
    css(request, response) {
        let path = "style" + request.url;
        let content = "text/css; charset=utf-8";
        getAndServe(response, path, content);
    },
    js(request, response) {
        let path = "script" + request.url;
        let content = "application/javascript; charset=utf-8";
        getAndServe(response, path, content);
    },
    updateBooks (request, response, data) {
        let obj = util.makeWebArrays(request, data);
        console.log(`${obj.POST.title}`);

        //read XML file
        fs.readFile("books.xml", "utf-8", function(err, data){
            if (err) {
                throw err;
            }

            //Convert XML data to JSON object
            xml2js.parseString(data, function(err, result) {
                if (err) {
                    throw err;
                }

                //replace an element in our JSON file
                //result.booksLibrary.books[2].title = 'Test book title';                 

                //Add a new book to Library
                const newBook = {
                    title: obj.POST.title,
                    sub_title: obj.POST.sub_title,
                    edition: obj.POST.edition,
                    authors: [
                        {
                            author: obj.POST.authors
                        }
                    ],
                    publisher: [
                        {
                            name: obj.POST.publisher,
                            year: obj.POST.year,
                        }
                    ],
                    pages: obj.POST.pages,
                    isbn: obj.POST.isbn,
                    price: obj.POST.price
                };

                result.booksLibrary.books.push(newBook);

                //Convert JSON object to XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                //write updated XML string to a file
                fs.writeFile('books.xml', xml, function(err) {
                    if (err) {
                        throw err;
                    }

                    console.log('Updated books.xml with a new book');

                });

                //Print JSON object
                //console.log(JSON.stringify(result, null, 4));

            });
        });

        // response.writeHead(httpStatus.OK, {
        //     "Content-Type" : "text/plain"});
        response.writeHead(httpStatus.MOVED_PERMANENTLY, {
            "Location": "http://localhost:3000"});
        response.write('Nu sender vi svar til clienten');
        response.end();
    }   
}




//Template for adding new book to XML file manually
// const newBook = {
//     title: ['A new book title'],
//     sub_title: ['A sub title for the new book'],
//     edition: ["5th"],
//     authors: [
//         {
//             author: ["Christian Dum Dum"]
//         }
//     ],
//     publisher: [
//         {
//             name: ["Book Publishing Co."],
//             year: ["2020"],
//         }
//     ],
//     pages: ["347"],
//     isbn: ["1234567890"],
//     price: ["289,95"]
// };