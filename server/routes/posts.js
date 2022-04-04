const router = require("express").Router();
const User = require("../models/User"); //not sure I'll need this.
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Create New Post

router.post("/create", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update post

router.put("/update/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $set: req.body,
        },
        { new: true }
      );
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

//Get all posts

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
