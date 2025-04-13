// backend/models/postModel.js
const db = require('../db');
 ``
// Get all posts with pagination
exports.getAllPosts = (limit, offset, search) => {
  const searchTerm = `WHERE (title LIKE "%${search}%" OR author LIKE "%${search}%")`;
  return db.query(`
    SELECT posts.id, title, content, created_at, author, slug
    FROM posts
    ${search ? searchTerm : ''}
    ORDER BY posts.created_at DESC
    LIMIT ? OFFSET ?
  `, [limit, offset]);
};

exports.getTotalPostCount = () => {
  return db.query(`SELECT COUNT(*) AS total FROM posts`);
};

// Get single post
exports.getPostById = (id) => {
  return db.query(`
    SELECT posts.id, title, content, created_at, author
    FROM posts
    WHERE posts.slug = ?
  `, [id]);
};

// Search posts
exports.searchPosts = (query) => {
  const searchTerm = `%${query}%`;
  return db.query(`
    SELECT posts.id, title, content, created_at, author
    FROM posts
    WHERE title LIKE ? OR content LIKE ?
  `, [searchTerm, searchTerm]);
};
