const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.emit("welcome", { msg: "Socket server active", ts: Date.now() });

  socket.on("ping", (payload) => {
    console.log("ping received:", payload);
    socket.emit("pong", { echo: payload });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.SOCKET_PORT || 4000;
server.listen(PORT, () => console.log(`Socket.IO server listening on ${PORT}`));
