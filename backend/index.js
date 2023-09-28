require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

app.get("/api/", (req, res) => {
  console.log("/api/");
  res.json({ message: "json api" });
});

app.listen(PORT, () => console.log(`backend starting up on ${PORT}`));
