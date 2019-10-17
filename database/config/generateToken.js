const secrets = require("./secrets");
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken
};
function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    departments: user.departments
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
