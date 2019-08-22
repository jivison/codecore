const net = require("net");
const capitalize = require("./capitalize");

const server = net.createServer(socket => {
    console.log("- Connection opened -");

    socket.on("data", data => {
        if (data.toString() === "exit") {
            socket.write("Exitting...");
            socket.end();
        } else {
            socket.write(`Hello ${capitalize(data.toString())}!`);
        }
    });
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening on port ${PORT} and address ${ADDRESS}`);
});
