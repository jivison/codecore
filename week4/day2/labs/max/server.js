const net = require("net");

function max(csvArray) {
    let array = csvArray.split(",");
    return Math.max(...array).toString();
}

const server = net.createServer(socket => {
    console.log("Connection established");

    socket.on("data", data => {
        socket.write(max(data.toString()));
        socket.end();
    });
});

const PORT = 7000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log(`Listening on port ${PORT} and address ${ADDRESS}`);
});
