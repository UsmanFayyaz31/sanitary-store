const express = require("express");
var bodyParser = require("body-parser");
const User = require("../modals/Users");

const router = express.Router();

router.post("/sign-up", (req, res) => {
  const data = req.body;
  const user = new User(data);

  user.save((error) => {
    if (error) {
      return res.status(400).send({
        message:
          error.code === 11000
            ? Object.keys(error.keyPattern) + " already exists !"
            : error,
        success: false,
      });
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
      success: true,
      user: user,
    });
  });
});

router.post("/sign-in", (req, res) => {
  const data = req.body;

  User.find({ email: data.email, password: data.password })
    .then((data) => {
      if (data.length > 0) res.json({ data: data, success: true });
      else res.json({ success: false });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

module.exports = router;
