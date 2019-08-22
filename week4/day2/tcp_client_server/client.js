const net = require("net");

const socket = net.Socket();

const arg = process.argv[2];

socket.on("data", (data) => {
    console.log(`- Socket received data: ${data} -`);
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";

socket.connect(PORT, ADDRESS, () => {
    console.log("- Client connected -");

    socket.write(arg);
});
