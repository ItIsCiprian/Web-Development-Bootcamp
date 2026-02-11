/**
 * Database CRUD Examples - SQL vs NoSQL (MongoDB)
 * Complements "SQL vs NoSQL Databases.js" with practical code patterns.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

// ============== SQL (e.g. SQLite / MySQL) ==============
// Using a simple callback-style for SQLite (as often used in the course)

const sqlite3 = require("sqlite3").verbose();

function sqlCrudExample() {
  const db = new sqlite3.Database(":memory:");

  // CREATE TABLE (fixed schema)
  db.run(
    `CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
      if (err) return console.error(err);

      // CREATE (Insert)
      db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        ["Alice", "alice@example.com"],
        function (err) {
          if (err) return console.error(err);
          console.log("SQL Insert - last id:", this.lastID);
        }
      );

      // READ (Select)
      db.all("SELECT * FROM users WHERE email = ?", ["alice@example.com"], (err, rows) => {
        if (err) return console.error(err);
        console.log("SQL Read:", rows);
      });

      // UPDATE
      db.run("UPDATE users SET name = ? WHERE email = ?", ["Alice Updated", "alice@example.com"], (err) => {
        if (err) return console.error(err);
        console.log("SQL Update - changes:", this.changes);
      });

      // DELETE
      db.run("DELETE FROM users WHERE email = ?", ["alice@example.com"], (err) => {
        if (err) return console.error(err);
        db.close();
      });
    }
  );
}

// ============== NoSQL (MongoDB with Mongoose) ==============
// Flexible schema, document-based (as taught in the bootcamp)

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  // Schema is flexible - can add fields later without migration
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function nosqlCrudExample() {
  await mongoose.connect("mongodb://localhost:27017/bootcamp_db");

  try {
    // CREATE (Insert)
    const newUser = await User.create({ name: "Alice", email: "alice@example.com" });
    console.log("NoSQL Create:", newUser._id);

    // READ (Find)
    const found = await User.findOne({ email: "alice@example.com" });
    console.log("NoSQL Read:", found);

    // UPDATE
    const updated = await User.findOneAndUpdate(
      { email: "alice@example.com" },
      { name: "Alice Updated" },
      { new: true }
    );
    console.log("NoSQL Update:", updated);

    // DELETE
    await User.deleteOne({ email: "alice@example.com" });
    console.log("NoSQL Delete - done");
  } finally {
    await mongoose.disconnect();
  }
}

// ============== Comparison summary (run without DB for reference) ==============
const crudComparison = {
  sql: {
    create: "INSERT INTO table (cols) VALUES (?)",
    read: "SELECT * FROM table WHERE condition",
    update: "UPDATE table SET col = ? WHERE condition",
    delete: "DELETE FROM table WHERE condition",
    note: "Schema must exist; use placeholders (?) for safety.",
  },
  nosql: {
    create: "Model.create({ ... }) or new Model().save()",
    read: "Model.find() / findOne() / findById()",
    update: "Model.updateOne() / findOneAndUpdate()",
    delete: "Model.deleteOne() / findByIdAndDelete()",
    note: "Schema in code (Mongoose); documents can have extra fields.",
  },
};

// Export for use in other modules (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { sqlCrudExample, nosqlCrudExample, User, crudComparison };
}
