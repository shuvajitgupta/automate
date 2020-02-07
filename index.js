const express = require("express");
const http = require("http");
const WebSocket = require("ws");
// const app = express();
// const http = require("http").createServer(app);
// const path = require("path");
// const io = require("socket.io")(http);
// const PORT = process.env.PORT || 81;

// app.use(express.static(path.join(__dirname, "/index.html")));

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", socket => {
//   socket.on("message", msg => {
//     console.log(msg);
//   });
// });

// http.listen(PORT);
// import * as express from "express";
// import * as http from "http";
// import * as WebSocket from "ws";

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  //connection is up, let's add a simple simple event
  ws.on("message", message => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
