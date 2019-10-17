const db = require("../../database/config/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db("users").select("id", "username", "password", "departments");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username", "departments")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
