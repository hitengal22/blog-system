// backend/controllers/commentController.js
const Comment = require('../models/commentModel');

exports.getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const [comments] = await Comment.getCommentsByPostId(postId);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comments', details: err });
  }
};

exports.addComment = async (req, res) => {
  const { post_id, name, comment } = req.body;

  if (!post_id || !name || !comment) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await Comment.addComment(post_id, name, comment);
    res.status(201).json({ message: 'Comment added', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error adding comment', details: err });
  }
};
