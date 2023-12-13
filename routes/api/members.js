const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");

// Get all members
router.get("/", (req, res) => {
  // .json simply sends back the json
  res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
  const memberId = req.params.id;
  if (memberId > members.length - 1) {
    res
      .status(400)
      .json({ msg: `Member with the id of ${memberId} not found` });
  } else {
    res.json(members[memberId]);
  }
});

// Create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  members.push(newMember);
  res.json(members);
});

// Update member
router.put("/:id", (req, res) => {
  const memberId = req.params.id;
  if (memberId > members.length - 1) {
    res
      .status(400)
      .json({ msg: `Member with the id of ${memberId} not found` });
  } else {
    // update member logic here
    res.json({ msg: "Member updated" });
  }
});

// Delete member
router.delete("/:id", (req, res) => {
  const memberId = req.params.id;
  if (memberId > members.length - 1) {
    res
      .status(400)
      .json({ msg: `Member with the id of ${memberId} not found` });
  } else {
    // delete member logic
  }
});

module.exports = router;
