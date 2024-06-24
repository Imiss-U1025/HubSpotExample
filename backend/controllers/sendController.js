const hubspotService = require('../services/hubspotService');

exports.sendToNonOpeners = async (req, res) => {
  const { emailCampaignId, newSubject } = req.body;

  try {
    await hubspotService.sendEmailToNonOpeners(emailCampaignId, newSubject);
    res.send('Emails sent to non-openers successfully.');
  } catch (error) {
    console.error('Error sending emails to non-openers:', error.message);
    res.status(500).send('Error sending emails');
  }
};
