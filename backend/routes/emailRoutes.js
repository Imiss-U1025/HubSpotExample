const express = require('express');
const emailController = require('../controllers/emailController');
const router = express.Router();

router.get('/get-contacts', emailController.GetContacts);
router.get('/get-non-openers', emailController.GetNonOpeners);

module.exports = router;
