const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "prim-proper-props",
  password: "password",
  user: "postgres",
});

module.exports = pool;
