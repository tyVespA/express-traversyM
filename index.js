const express = require("express");
const path = require("path");

const app = express();
// in deployment the PORT number will be in an enviroment variable
const PORT = process.env.PORT || 5000;

const logger = require("./middleware/logger");

app.use(logger);

// Body parser middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Set static folder
// all files in public folder will be available
// ex. about.hmtl will be available at /about.html
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // from the current directory, go in a folder called public, then go in a file colled index.html
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Members API routes
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
