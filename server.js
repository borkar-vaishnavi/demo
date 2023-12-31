const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world", success: true });
});

app.get("/api/user", (req, res) => {
  res.status(200).json({ message: "This is the api for user", success: true });
});

app.listen(8000, (req, res) => {
  console.log("Server is running on port 8000");
});
