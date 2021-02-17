const fs = require("fs");
const xml2js = require("xml2js");

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
            title: ['A new book title'],
            sub_title: ['A sub title for the new book'],
            edition: ["5th"],
            authors: [
                {
                    author: ["Christian Dum Dum"]
                }
            ],
            publisher: [
                {
                    name: ["Book Publishing Co."],
                    year: ["2020"],
                }
            ],
            pages: ["347"],
            isbn: ["1234567890"],
            price: ["289,95"]
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
