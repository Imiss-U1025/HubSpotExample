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
  console.log(accessToken);
  const response = await axios.get(`https://api.hubapi.com/email/public/v1/campaigns/${emailCampaignId}/recipients`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const recipients = response.data.recipients;
  const nonOpeners = recipients.filter(recipient => !recipient.opened);
  console.log(nonOpeners);
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


// const getNonOpeners = async () => {
//   try {
//     const response = await axios.get(`https://api.hubapi.com/email/public/v1/events?eventType=OPEN&campaignId=${ORIGINAL_EMAIL_ID}&hapikey=${HUBSPOT_API_KEY}`);
//     const openedEmails = response.data.map(event => event.recipient);
    
//     const contactsResponse = await axios.get(`https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${HUBSPOT_API_KEY}`);
//     const allContacts = contactsResponse.data.contacts.map(contact => contact['vid']);
    
//     const nonOpeners = allContacts.filter(contact => !openedEmails.includes(contact));
    
//     return nonOpeners;
//   } catch (error) {
//     console.error('Error fetching non-openers:', error);
//     return [];
//   }
// };

