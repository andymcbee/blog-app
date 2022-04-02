const router = require("express").Router();
const User = require("../models/User"); //not sure I'll need this.
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Create New Post

router.post("/create", async (req, res) => {
  try {
    const newPost = new Post({
      username: req.body.username,
      title: req.body.title,
      desc: req.body.desc,
    });
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update post

router.put("/update/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username) {
      const updatedPost = await Post.updateOne(post, {
        title: req.body.title,
        desc: req.body.desc,
        username: req.body.username,
      });
      res.status(200).json(updatedPost);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete post

router.delete("/delete/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username) {
      const deletedPost = await Post.deleteOne(post);
      res.status(200).json("Post deleted");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Find single post

router.get("/findone/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
