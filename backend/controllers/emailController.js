const axios = require("axios");
const cron = require("node-cron");
const hubspotService = require("../services/hubspotService");

const HUBSPOT_API_KEY = "your-hubspot-api-key";
const ORIGINAL_EMAIL_ID = "171006581899";
const FOLLOWUP_EMAIL_ID = "followup-email-id";

const HUBSPOT_ACCESS_TOKEN = "your-private-app-access-token";

const accessToken =
  "CPjNmfWEMhIHAgEAQAAAARintZkWIM7G_x4orqPVATIU3dZRI2bhXuUAY3DiRGYakv2ABgg6UAAxAEH_BwAAAACAAABgeMQogAAAIAAAABQAADgAAADAw_8HAQAAAIAnAACAAAAQAgAAAAAAAAAAAAACAAi4AgAAAAAAAAAAAAAAAAAAAABAQhSBgb7JkTgAc5QyjeMcVI9-uWQ33UoDbmExUgBaAGAA";

// exports.GetNonOpeners = async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.hubapi.com/email/public/v1/events?eventType=OPEN&campaignId=${ORIGINAL_EMAIL_ID}&hapikey=${HUBSPOT_API_KEY}`
//     );
//     const openedEmails = response.data.map((event) => event.recipient);

//     const contactsResponse = await axios.get(
//       `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${HUBSPOT_API_KEY}`
//     );
//     const allContacts = contactsResponse.data.contacts.map(
//       (contact) => contact["vid"]
//     );

//     const nonOpeners = allContacts.filter(
//       (contact) => !openedEmails.includes(contact)
//     );

//     return nonOpeners;
//   } catch (error) {
//     console.error("Error fetching non-openers:", error);
//     return [];
//   }
// };

exports.GetContacts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.hubapi.com/contacts/v1/lists/all/contacts/all",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    // console.log(JSON.stringify(response.data, null, 2));
    const contacts = response.data.contacts.map((contact) => {
      const identities = contact["identity-profiles"]?.[0]?.identities || [];
      const emailIdentity = identities.find(
        (identity) => identity.type === "EMAIL"
      );
      const email = emailIdentity ? emailIdentity.value : "";
      // console.log(identities);

      return {
        id: contact.vid,
        firstName: contact.properties.firstname?.value || "",
        lastName: contact.properties.lastname?.value || "",
        company: contact.properties.company?.value || "",
        email: email,
      };
    });
    res.json({ contacts });
  } catch (error) {
    res.send("Error fetching contacts");
  }
};

exports.GetNonOpeners = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.hubapi.com/marketing/v3/email/public/v1/events",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          eventType: "OPEN",
          emailCampaignId: ORIGINAL_EMAIL_ID,
        },
      }
    );
    // console.log(response);
    const openedEmails = response.data.results.map((event) => event.recipient);

    const contactsResponse = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/contacts`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const allContacts = contactsResponse.data.results.map(
      (contact) => contact.id
    );

    const nonOpeners = allContacts.filter(
      (contact) => !openedEmails.includes(contact)
    );
    // console.log(nonOpeners);
    res.json({ nonOpeners });
  } catch (error) {
    // console.error('Error fetching non-openers:', error);
    res.status(500).json({ error: "Error fetching non-openers" });
    return [];
  }
};

exports.fetchEmailCampaigns = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.hubapi.com/marketing-emails/v1/emails?limit=5",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const campaigns = response.data.objects;
    campaigns.forEach(campaign => {
      console.log(`Email Campaign ID: ${campaign.id}, Name: ${campaign.name}`);
    });

    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Error fetching emailcampaigns" });
  }
};

// exports.sendFollowUpEmail = async (contactId) => {
//   try {
//     await axios.post(`https://api.hubapi.com/email/public/v1/singleEmail/send`, {
//       emailId: FOLLOWUP_EMAIL_ID,
//       recipient: contactId,
//     }, {
//       headers: {
//         Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
//       },
//     });
//   } catch (error) {
//     console.error('Error sending follow-up email:', error);
//   }
// };
