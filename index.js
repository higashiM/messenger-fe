const io = require("socket.io-client");

//const socket = io.connect("http://localhost:3000"); //use this to test locally

const socket = io.connect("https://messenger-be.herokuapp.com/");

socket.on("connect", function (data) {
  socket.emit("join", "Hello World from client");
  console.log("connected");
  socket.on("message", (msg) => console.log(msg));
  socket.on("connect", function (data) {});
});
