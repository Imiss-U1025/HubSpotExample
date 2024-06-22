const axios = require('axios');
const User = require('../models/User');
const { getValidAccessToken } = require('../utils/tokenUtils');

exports.sendEmailToNonOpeners = async (emailCampaignId, newSubject) => {
  const nonOpeners = await getNonOpeners(emailCampaignId);
  await createAndSendEmail(nonOpeners, newSubject);
};

async function getNonOpeners(emailCampaignId) {
  // Fetch non-openers using HubSpot API
  // This example assumes you fetch campaign statistics and filter non-openers
  const accessToken = await getValidAccessToken();
  const response = await axios.get(`https://api.hubapi.com/email/public/v1/campaigns/${emailCampaignId}/recipients`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const recipients = response.data.recipients;
  const nonOpeners = recipients.filter(recipient => !recipient.opened);
  return nonOpeners;
}

async function createAndSendEmail(nonOpeners, subject) {
  const accessToken = await getValidAccessToken();
  const emailResponse = await axios.post('https://api.hubapi.com/marketing-emails/v1/emails', {
    fromName: 'Your Name',
    fromEmail: 'your-email@example.com',
    subject: subject,
    html: '<p>This is a follow-up email.</p>',
    emailType: 'regular',
    contactListIds: nonOpeners.map(recipient => recipient.contactId),
  }, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return emailResponse.data;
}
