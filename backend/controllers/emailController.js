const axios = require("axios");
const hubspotService = require("../services/hubspotService");

const HUBSPOT_API_KEY = "your-hubspot-api-key";
const ORIGINAL_EMAIL_ID = "original-email-id";
const FOLLOWUP_EMAIL_ID = "followup-email-id";

const accessToken =
  "CJemhOuEMhIVAAEAQAAAAQAAAAAAAAAAAACAAAAQGKa7mhYgzsb_Hiiuo9UBMhRKW-F4OlTAYe2L_hsgi8TXjstLMDpAAAAAQQAAAAAAAAAAAAAAAACAAAAAAAAAAAAAIAAAAAAA4AEAAAAAAAAAAAAAABACAAAAAAAAAAAAAQAAAAAAAkIUNC2HfVIwWMzMeSB5eQZiiNnFMu1KA25hMVIAWgBgAA";

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
    const response = await axios.get(
      "https://api.hubapi.com/contacts/v1/lists/all/contacts/all",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    // console.log(JSON.stringify(response.data, null, 2));
    const contacts = response.data.contacts.map(contact => {
      const identities = contact['identity-profiles']?.[0]?.identities || [];
      const emailIdentity = identities.find(identity => identity.type === 'EMAIL');
      const email = emailIdentity ? emailIdentity.value : '';
      console.log(identities);

      return {
        id: contact.vid,
        firstName: contact.properties.firstname?.value || '',
        lastName: contact.properties.lastname?.value || '',
        company: contact.properties.company?.value || '',
        email: email
      };
    });

    // const contacts = response.data.contacts.map((contact) => (
      
    //   {
        
    //   // id: contact.vid,
    //   // // email: contact.identity-profiles.identities?.value || '',
    //   // firstName: contact.properties.firstname?.value || '',
    //   // lastName: contact.properties.lastname?.value || '',
    // }
// ));
    // console.log(contacts);

    res.json({ contacts });
  } catch (error) {
    res.send("Error fetching contacts");
  }
};
