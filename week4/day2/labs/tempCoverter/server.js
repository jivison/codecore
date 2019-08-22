const http = require("http");
const url = require("url");

function convertTemp(fahrenheit) {
    // (109°F − 32) × 5/9 = 42.778°C
    return (Math.round(((fahrenheit - 32) * 5) / 9));
}

const server = http.createServer((request, response) => {
    const queryParams = url.parse(request.url, true).query;
    console.log(queryParams);

    const display = queryParams.temp
        ? convertTemp(queryParams.temp)
        : "No param 'temp' found";

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
        <h1>Temperature conversion:</h1>
        <h2>${display}</h2>
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
