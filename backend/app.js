const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use("/static", express.static("static"));
app.use("/", express.static("index.html"));

app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.jpeg|.png|.map)$/i.test(req.path)) {
    next();
  } else {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.sendFile(path.join(__dirname, "../react/dist/index.html"));
  }
});

app.use(express.static(path.join(__dirname, "../react/dist/")));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
