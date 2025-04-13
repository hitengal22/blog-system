const Contact = require('../models/contactModel');

exports.contactForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ status: 'error', error: 'All fields are required.' });
    }
    try {
        await Contact.addQuery(name, email, message)
        
        return res.status(200).json({ status: 'success', data: 'Thank you for contacting us!' });
    } catch (error) {
        return res.status(500).json({ status: 'error', error: error.message });
    }
}