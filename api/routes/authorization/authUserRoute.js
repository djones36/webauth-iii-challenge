const router = require("express").Router();
const Users = require("../../models/globalModel");
const restricted = require("../../../middleware/restrictionMiddleware");
const errorRef = require("../../../middleware/errorRef");
// const checkDepartment = require("../../../middleware/departmentMiddleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(error => {
      res.status(500).json(errorRef(error));
    });
});

module.exports = router;
