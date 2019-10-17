exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 64)
      .notNullable()
      .unique();
    users.string("password", 8).notNullable();
    users.string("departments", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
