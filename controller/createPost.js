const Post = require("../model/post");

const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const owner = req.id;
    const post = await Post.create({
      title: title,
      description: description,
      owner: owner,
    }).then(console.log("Post created"));
    res.json({
      postId: post.id,
      Title: post.title,
      Description: post.description,
      Date: post.createdAt.toLocaleDateString(),
      Time: post.createdAt.toLocaleTimeString(),
      owner: post.owner,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {createPost};
