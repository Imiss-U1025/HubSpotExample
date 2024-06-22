const express = require('express');
const emailController = require('../controllers/emailController');
const router = express.Router();

router.post('/send-to-non-openers', emailController.sendToNonOpeners);

module.exports = router;
