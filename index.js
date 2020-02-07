const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const PORT = process.env.PORT || 81;

app.use(express.static(path.join(__dirname, "index.html")));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

io.on("connection", socket => {
  socket.on("message", msg => {
    console.log(msg);
  });
});

http.listen(PORT);
