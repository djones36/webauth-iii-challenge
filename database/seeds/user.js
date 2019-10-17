const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        username: "user1",
        password: "password1",
        departments: "departments1"
      },
      {
        username: "user2",
        password: "password2",
        departments: "departments2"
      },
      {
        username: "user3",
        password: "password3",
        departments: "departments3"
      }
    ]);
  });
};
