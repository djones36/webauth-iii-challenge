const express = require("express");
const Users = require("../models/globalModel");
const router = express.Router();
const bcrypt = require("bcryptjs");
const errorRef = require("../../middleware/errorRef");

//Post for user to create a new user account
router.post("/", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      res
        .status(500)
        .json(errorRef(error), { message: "failed to create account" });
    });
});

module.exports = router;
