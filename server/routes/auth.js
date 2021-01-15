const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("hello");
});

// @route    POST /signup
// @desc     User Signup to Database
// @access   Public
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.json({ error: "all fields are required!!!" }); // return is added in order not to proceed further
  } else {
    User.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res
            .status(422)
            .json({ error: "A user already exists with this email" });
        } else {
          var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt
            .hash(password, salt)
            .then((hashedPassword) => {
              const user = new User({ email, name, password: hashedPassword });

              user
                .save()
                .then((user) => {
                  res.json({
                    message: `User with email ${email} saved successfully to the database`,
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => console.log(error));
  }
});

module.exports = router;
