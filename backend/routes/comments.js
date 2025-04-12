// backend/routes/comments.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all comments for a post
router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    const [comments] = await db.query(`
      SELECT id, name, comment, created_at
      FROM comments
      WHERE post_id = ?
      ORDER BY created_at DESC
    `, [postId]);

    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments', details: err });
  }
});

// Add a new comment to a post
router.post('/', async (req, res) => {
  const { post_id, name, comment } = req.body;

  if (!post_id || !name || !comment) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await db.query(`
      INSERT INTO comments (post_id, name, comment)
      VALUES (?, ?, ?)
    `, [post_id, name, comment]);

    res.status(201).json({ message: 'Comment added', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment', details: err });
  }
});

module.exports = router;
