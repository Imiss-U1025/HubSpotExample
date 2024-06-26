const axios = require("axios");
const cron = require("node-cron");
const hubspotService = require("../services/hubspotService");

const HUBSPOT_API_KEY = "your-hubspot-api-key";
const ORIGINAL_EMAIL_ID = "313117845";
const FOLLOWUP_EMAIL_ID = "312705699";

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
  const accessToken = req.query.accessToken;
  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required" });
  }
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
  const accessToken = req.query.accessToken;
  const campaignId = req.query.campaignId;
  let offset = 0;
  const limit = 100;
  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required" });
  }
  if (!campaignId) {
    return res.status(400).json({ error: "CampaignID is required" });
  }
  try {
    const response = await axios.get(
      "https://api.hubapi.com/email/public/v1/events",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          eventType: "OPEN",
          emailCampaignId: campaignId,
          limit: limit,
        },
      }
    );

    console.log("00000000000000000000000000", response.data);

    const openedEmails = response.data.events.map((event) => event.recipient);
    console.log("1111111111111111111111111111111111111111111", openedEmails);

    const contactsResponse = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/contacts`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // const allContacts = contactsResponse.data.results.map(
    //   (contact) => contact.id
    // );
    const allContacts = contactsResponse.data.results.map(
      (contact) => contact.properties.email
    );
    // const allContacts = contactsResponse.data.contacts.map(contact => contact);
    console.log("2222222222222222222222222222222", allContacts);

    // const nonOpeners = allContacts.filter(
    //   (email) => !openedEmails.includes(email)
    // );
    const nonOpeners = allContacts.filter(
      (email) => !openedEmails.includes(email)
    );
    console.log("333333333333333333333333333333333333", nonOpeners);

    // res.json(nonOpeners);
    res.json(nonOpeners);
  } catch (error) {
    res.status(500).json({ error: "Error fetching non-openers" });
    return [];
  }
};

exports.fetchEmailCampaigns = async (req, res) => {
  const accessToken = req.query.accessToken;
  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required" });
  }
  try {
    const response = await axios.get(
      "https://api.hubapi.com/marketing-emails/v1/emails",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const emailCampaigns = response.data.objects;
    const campaignStatusPromises = emailCampaigns.map(async (campaign) => {
      try {
        const campaignData = await axios.get(
          `https://api.hubapi.com/email/public/v1/campaigns/${campaign.allEmailCampaignIds}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        return campaignData.data.counters;
      } catch (error) {
        console.error(`Error fetching campaign data for ID ${campaign.id}:`, error);
        return null; // or handle the error as needed
      }
    });

    const campaignStatus = await Promise.all(campaignStatusPromises);

    // Remove any null values from campaignStatus if needed
    const filteredCampaignStatus = campaignStatus.filter(status => status !== null);

    res.json({ emailCampaigns, campaignStatus: filteredCampaignStatus });
  } catch (error) {
    console.error('Error fetching email campaigns:', error);
    res.status(500).json({ error: "Error fetching email campaigns" });
  }
};




exports.GetCampaigns = async (req, res) => {
  const accessToken = req.query.accessToken;
  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required" });
  }
  try {
    const response = await axios.get(
      "https://api.hubapi.com/email/public/v1/campaigns/by-id?limit=10",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const campaigns = response.data.campaigns;
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Error fetching emailcampaigns" });
  }
};
exports.sendFollowUpEmail = async (contactId) => {
  try {
    await axios.post(
      `https://api.hubapi.com/email/public/v1/singleEmail/send`,
      {
        emailId: FOLLOWUP_EMAIL_ID,
        recipient: 32244616994,
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.error("Error sending follow-up email:", error);
  }
};
