const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../keys.js");
const requireLogin = require("../middleware/requireLogin");

// @route    GET /protected
// @desc     A demo route to demonstrate protected routes
// @access   Protected   
router.get("/protected", requireLogin, (req, res) => {
  res.send("hello protected user");
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

//  @route   POST /signin
//  @desc    User Signin
//  @access  Public
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Both email and password are required" });
  } else {
    User.findOne({ email: email })
      .then((savedUser) => {
        if (!savedUser) {
          return res.status(422).json({ error: "User is not registered" });
        } else {
          bcrypt.compare(password, savedUser.password).then(correctPassword=>{
              if(correctPassword){
                  //res.json({message: "Successfully signed in"});
                  //when the user signs in, the server sends him back a token
                  const token = jwt.sign({_id: savedUser._id},  JWT_SECRET);
                  res.json({token});

              }else{
                  return res.status(422).json({error: "Invalid email or password"})
              }
          });
        }
      })
      .catch(error=>{
          console.log(error);
      });
  }
});

module.exports = router;
