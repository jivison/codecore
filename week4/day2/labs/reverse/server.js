const net = require("net");

const server = net.createServer(socket => {
    console.log("- Connection established -");
    socket.on("data", data => {
        socket.write(
            data
                .toString()
                .split("")
                .reverse()
                .join("")
        );
        socket.end();
    });
});

const PORT = 7000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log(`Listening on port ${PORT} and address ${ADDRESS}`);
});
