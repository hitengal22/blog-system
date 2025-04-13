const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/v1/contact
router.post('/', contactController.contactForm);

module.exports = router;