const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/authorize', authController.authorize);
router.get('/oauth/callback', authController.oauthCallback);

module.exports = router;
