const express = require('express');
const emailController = require('../controllers/emailController');
const router = express.Router();

router.post('/get-non-openers', emailController.GetNonOpeners);

module.exports = router;
