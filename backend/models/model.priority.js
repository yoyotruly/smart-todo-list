const db = require("../db/index");

const getAllPriorities = () => {
  const query = "SELECT * FROM priorities";

  return db
    .query(query)
    .then(res => {
      const priorities = res.rows;
      if (!priorities) return null;
      return priorities;
    })
    .catch(err => console.log(err.stack));
};

const getPriorityById = (id) => {
  const query = `
    SELECT *
      FROM priorities
     WHERE id = $1
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const priority = res.rows[0];
      if (!priority) return null;
      return priority;
    })
    .catch(err => console.log(err.stack));
};

module.exports = {
  getAllPriorities,
  getPriorityById
}
