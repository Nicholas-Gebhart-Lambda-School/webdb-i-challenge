const express = require("express");
const server = express();
const accountsRouter = require("./accounts/accounts-router");
server.use(express.json());
server.use("/api/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.send("<h2>Root</h2>");
});

module.exports = server;
