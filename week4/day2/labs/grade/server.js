const http = require("http");
const url = require("url");

const gradeObj = {
    86: "A",
    73: "B",
    67: "C+",
    60: "C",
    50: "C-",
    0: "F"
};

function grade(number) {
    number = parseInt(number);
    for (let keyI in Object.keys(gradeObj)) {
        let key = Object.keys(gradeObj).reverse()[keyI];
        if (number >= key) {
            return gradeObj[key];
        }
    }
    
}

const server = http.createServer((request, response) => {
    const queryParams = url.parse(request.url, true).query;

    const display = queryParams.score
        ? grade(queryParams.score)
        : "Score not found";

    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello from node!</title>
    </head>
    <body>
        <h1 style="font-size: 5000px; text-align:center">${display}</h1>
    </body>
    </html>
    `);
    response.end();
});

const PORT = 4000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on port ${PORT} and address ${ADDRESS}`);
});
