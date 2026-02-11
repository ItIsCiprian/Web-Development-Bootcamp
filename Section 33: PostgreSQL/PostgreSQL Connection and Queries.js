/**
 * PostgreSQL - Connection and Queries from Node.js
 * Using the pg client for PostgreSQL in a Node app.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || "bootcamp_db",
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "",
});

async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

// Example: get all users
async function getUsers() {
  const res = await query("SELECT id, name, email FROM users ORDER BY id");
  return res.rows;
}

// Example: insert user (use parameterized queries to avoid SQL injection)
async function insertUser(name, email) {
  const res = await query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
  return res.rows[0];
}

// Example: create table (run once during setup)
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

if (typeof module !== "undefined" && module.exports) {
  module.exports = { pool, query, getUsers, insertUser, createUsersTable };
}
