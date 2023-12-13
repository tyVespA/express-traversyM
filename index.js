const express = require("express");
const path = require("path");

const app = express();
// in deployment the PORT number will be in an enviroment variable
const PORT = process.env.PORT || 5000;

const logger = require("./middleware/logger");
const members = require("./Members");

app.use(logger);

// Set static folder
// all files in public folder will be available
// ex. about.hmtl will be available at /about.html
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // from the current directory, go in a folder called public, then go in a file colled index.html
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get all members
app.get("/api/members", (req, res) => {
  // .json simply sends back the json
  res.json(members);
});

// Get single member
app.get("/api/members/:id", (req, res) => {
  const memberId = req.params.id;
  if (memberId > members.length - 1) {
    res
      .status(400)
      .json({ msg: `Member with the id of ${memberId} not found` });
  } else {
    res.json(members[memberId]);
  }
  // res.json(members.filter((member) => member.id === parseInt(req.params.id)));
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
