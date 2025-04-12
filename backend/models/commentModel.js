// backend/models/commentModel.js
const db = require('../db');

// Get comments for a post
exports.getCommentsByPostId = (postId) => {
  return db.query(`
    SELECT id, name, comment, created_at
    FROM comments
    WHERE post_id = ?
    ORDER BY created_at DESC
  `, [postId]);
};

// Add a new comment
exports.addComment = (postId, name, comment) => {
  return db.query(`
    INSERT INTO comments (post_id, name, comment)
    VALUES (?, ?, ?)
  `, [postId, name, comment]);
};
