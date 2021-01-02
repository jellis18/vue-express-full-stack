const express = require("express");
const Post = require("../../db/Post");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  posts = await Post.find();
  res.send(posts);
});

// Add Post
router.post("/", async (req, res) => {
  await Post.create(req.body);
  res.status(201).send();
});

// Delete Post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).send();
});

module.exports = router;
