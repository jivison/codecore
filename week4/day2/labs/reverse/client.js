const net = require("net");

const socket = net.Socket();
const arg = process.argv[2];

socket.on("data", data => {
    console.log("-- BEGIN TRANSMISSION -- ");
    console.log(data.toString());
    console.log("-- END TRANSMISSION --");
});

const PORT = 7000;
const ADDRESS = "127.0.0.1";

socket.connect(PORT, ADDRESS, () => {
    console.log("Connected.");
    socket.write(arg);
});
