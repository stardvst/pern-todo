const { Pool } = require("pg");
require("dotenv").config();

//const devConfigUrl = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}:${process.env.PG_HOST}:${process.env.PG_PORT}:${process.env.PG_DATABASE}`;

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL, // comes from heroku add-on
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = pool;
