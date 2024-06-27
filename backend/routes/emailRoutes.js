const express = require('express');
const emailController = require('../controllers/emailController');
const router = express.Router();

router.get('/get-contacts', emailController.GetContacts);
router.get('/get-email-campaigns', emailController.fetchEmailCampaigns);
router.get('/get-campaigns', emailController.GetCampaigns);
router.get('/get-non-openers', emailController.GetNonOpeners);
router.post('/send-non-openers', emailController.sendFollowUpEmail);



module.exports = router;
