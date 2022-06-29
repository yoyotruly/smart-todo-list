const db = require("../db/index");

const getUserById = (id) => {
  const query = `
    SELECT *
      FROM users
     WHERE id = $1
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const user = res.rows[0];
      if (!user) return null;
      return user;
    })
    .catch(err => console.log(err.stack));
};

const updateUserById = (id) => {
  const query = `
    UPDATE users
    SET -- insert fields
    WHERE id = $1
    RETURNING *;
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const user = res.rows[0];
      if (!user) return null;
      return user;
    })
    .catch(err => console.log(err.stack));
};

module.exports = {
  getUserById,
  updateUserById
}
