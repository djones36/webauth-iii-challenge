const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const logger = require("../middleware/loggerMiddleware");
//Routes imports
// const tokenSignupRoute = require('./routes/tokenSignUpRoute');
// const tokenLoginRoute = require('./routes/tokenLoginRoute')
// const AuthUserRoute = require('./routes/authorization/authUserRoute');
// const tokenLogoutRoute = require('./routes/tokenLogoutRoute');

server.use(helmet(), express.json(), logger, cors());

//Routes
// server.use("/api/signup", tokenSignupRoute);
// server.use("/api/login", tokenLoginRoute);
// server.use("/api/authorization/users", AuthUserRoute);
// server.use("/api/logout", tokenLogoutRoute);

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
