const express = require("express");
const tags = require("../data/tags");
const fakePosts = require("../data/posts");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json(tags);
});

// Get a list of comments
router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  const postTagged = fakePosts.filter(tag => tag.tag_ids.includes(tagId));
  res.json(postTagged);
});

module.exports = router;
