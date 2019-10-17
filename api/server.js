const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

//global middleware
const logger = require("../middleware/loggerMiddleware");

//Routes imports
const tokenRegisterRoute = require("./routes/tokenRegisterRoute");
const tokenLoginRoute = require("./routes/tokenLoginRoute");
const AuthUserRoute = require("./routes/authorization/authUserRoute");

server.use(helmet(), express.json(), logger, cors());

//Routes
server.use("/api/register", tokenRegisterRoute);
server.use("/api/login", tokenLoginRoute);
server.use("/api/auth/users", AuthUserRoute);

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
