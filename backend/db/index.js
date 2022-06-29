
require("dotenv").config();
const dbParams = require("../lib/db.js");

const { Pool } = require("pg");
const db = new Pool(dbParams);

db.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => {
    return db.query(text, params);
  }
};
