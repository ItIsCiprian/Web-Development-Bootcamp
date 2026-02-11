/**
 * SQL - Common Queries Reference
 * Standard SQL patterns for CRUD and filtering.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const sqlQueriesReference = {
  create: {
    table: `CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`,
    insert: "INSERT INTO users (name, email) VALUES (?, ?);",
  },
  read: {
    all: "SELECT * FROM users;",
    byId: "SELECT * FROM users WHERE id = ?;",
    filter: "SELECT * FROM users WHERE email = ? AND name LIKE ?;",
    order: "SELECT * FROM users ORDER BY created_at DESC;",
    limit: "SELECT * FROM users LIMIT 10 OFFSET 0;",
  },
  update: "UPDATE users SET name = ?, email = ? WHERE id = ?;",
  delete: "DELETE FROM users WHERE id = ?;",
  aggregate: {
    count: "SELECT COUNT(*) AS total FROM users;",
    sum: "SELECT SUM(amount) AS total FROM orders;",
    avg: "SELECT AVG(price) FROM products;",
  },
  join: {
    inner: "SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;",
    left: "SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id;",
  },
};

// Run a query (example with sqlite3 - requires npm install sqlite3)
function runQuery(db, sql, params = [], callback) {
  db.run(sql, params, callback);
}

function runSelect(db, sql, params = [], callback) {
  db.all(sql, params, callback);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { sqlQueriesReference, runQuery, runSelect };
}
