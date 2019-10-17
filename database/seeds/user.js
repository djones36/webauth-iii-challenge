exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      { username: 1, passsword: "password1", departments: "departments1" },
      { username: 2, passsword: "password2", departments: "departments2" },
      { username: 3, passsword: "password3", departments: "departments3" }
    ]);
  });
};
