const express = require("express");
const User = require("../modals/Users");

const router = express.Router();

router.get("/testing", (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get("/users", (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/users", (req, res) => {
  const data = req.body;
  const user = new User(data);

  user.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

module.exports = router;
