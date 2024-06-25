const express = require('express');
const sendController = require('../controllers/sendController');
const router = express.Router();

router.post('/send-to-non-openers', sendController.sendToNonOpeners);

module.exports = router;
