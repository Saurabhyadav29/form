// Backend server using Node.js with Express.js
const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "form",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// API endpoint for form submission
app.post("/submit", (req, res) => {
  const formData = req.body; // Assuming form data is sent as JSON

  // Insert the form data into MySQL
  connection.query("INSERT INTO formdetails SET ?", formData, (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).json({ message: "Failed to submit form data" });
      return;
    }

    console.log("Form data submitted to MySQL");
    res.status(200).json({ message: "Form data submitted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
