// backend/models/contactModel.js
const db = require('../db');

// Add a contanct query
exports.addQuery = (name, email, message) => {
    return db.query(`
    INSERT INTO contact (name, email, message)
    VALUES (?, ?, ?)
  `, [name, email, message]);
};
