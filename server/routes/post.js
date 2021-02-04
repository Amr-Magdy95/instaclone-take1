const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requireLogin");

//  @route    POST /createpost
//  @desc     Allows a user to create a post
//  @access   Protected
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.json({ error: "You must fill all of the fields" });
  } else {
    //console.log(req.user);
    req.user.password = undefined;
    const post = new Post({
      title,
      body,
      postedBy: req.user,
    });

    post.save().then((post) => {
      res.json({
        message: `the post with title ${post.title} was successfully added to the db`,
      });
    });
  }
});

// @route    GET /allposts
// @desc     Retrieve all the posts from the database
// @access   Public
router.get("/allposts", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => res.json({ posts }))
    .catch((err) => console.log(err));
});
module.exports = router;
