const secrets = require("./secrets");

module.exports = {
  generateToken
};
function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
