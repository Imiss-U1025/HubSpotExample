const axios = require("axios");
const hubspotService = require("../services/hubspotService");

const HUBSPOT_API_KEY = 'your-hubspot-api-key';
const ORIGINAL_EMAIL_ID = 'original-email-id';
const FOLLOWUP_EMAIL_ID = 'followup-email-id';

const accessToken = 'CK6J-OiEMhIVAAEAQAAAAQAAAAAAAAAAAACAAAAQGKa7mhYgzsb_Hiiuo9UBMhSIELTBQYoCYLmMX_EZGbnBMSA_BjpAAAAAQQAAAAAAAAAAAAAAAACAAAAAAAAAAAAAIAAAAAAA4AEAAAAAAAAAAAAAABACAAAAAAAAAAAAAQAAAAAAAkIUBpGs9l35XjfIdylvGzA9ITvnz9lKA25hMVIAWgBgAA';

exports.GetNonOpeners = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/email/public/v1/events?eventType=OPEN&campaignId=${ORIGINAL_EMAIL_ID}&hapikey=${HUBSPOT_API_KEY}`
    );
    const openedEmails = response.data.map((event) => event.recipient);

    const contactsResponse = await axios.get(
      `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${HUBSPOT_API_KEY}`
    );
    const allContacts = contactsResponse.data.contacts.map(
      (contact) => contact["vid"]
    );

    const nonOpeners = allContacts.filter(
      (contact) => !openedEmails.includes(contact)
    );

    return nonOpeners;
  } catch (error) {
    console.error("Error fetching non-openers:", error);
    return [];
  }
};

exports.GetContacts = async (req, res) => {
  try {
    const response = await axios.get('https://api.hubapi.com/contacts/v1/lists/all/contacts/all', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response);
    res.json(response.data);

  } catch (error) {
    res.send('Error fetching contacts');
  }
};