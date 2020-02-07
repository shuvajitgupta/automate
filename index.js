const express = require("express");
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const path = require("path");
const PORT = process.env.PORT || 81;

app.use(express.static(path.join(__dirname, "/index.html")));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("chat message", msg => {
    console.log(msg);
  });
});

http.listen(PORT);
