const db = require("../db/index");

const getAllLabels = () => {
  const query = "SELECT * FROM labels";

  return db
    .query(query)
    .then(res => {
      const labels = res.rows;
      if (!labels) return null;
      return labels;
    })
    .catch(err => console.log(err.stack));
};

const getLabelById = (id) => {
  const query = `
    SELECT *
      FROM labels
     WHERE id = $1
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const label = res.rows[0];
      if (!label) return null;
      return label;
    })
    .catch(err => console.log(err.stack));
};

module.exports = {
  getAllLabels,
  getLabelById
}
