const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// EJS
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});