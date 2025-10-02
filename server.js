import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DB connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",   // change if different
  password: "",   // your MySQL password
  database: "myapp", // your database name
});

// ✅ Contact form submission
app.post("/api/contacts", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await db.execute(
      "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.json({ success: true, message: "Contact saved!" });
  } catch (err) {
    console.error("❌ Contact error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Login route (admin only)
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM admins WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get all contact submissions (for admin view)
app.get("/api/contacts", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM contact ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
