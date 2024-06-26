const express = require('express');
const emailController = require('../controllers/emailController');
const router = express.Router();

router.post('/get-non-openers', emailController.sendToNonOpeners);

module.exports = router;
