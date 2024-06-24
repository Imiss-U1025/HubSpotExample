const axios = require("axios");
const User = require("../models/User");
const config = require("../config/config");

const { saveTokens } = require("../utils/tokenUtils");
require('dotenv').config(); 

exports.authorize = (req, res) => {
  const clientId = process.env.HUBSPOT_CLIENT_ID;
  const redirectUri = process.env.HUBSPOT_REDIRECT_URI;
  const scopes = process.env.scopes;
  console.log(clientId);
  if (clientId !== undefined) {
    const authorizationUrl = `https://app.hubspot.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;
    res.json({"redirect_url":authorizationUrl});
  }
};

exports.oauthCallback = async (req, res) => {
  const { code } = req.query;

  try {
    const tokenResponse = await axios.post(
      "https://api.hubapi.com/oauth/v1/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: config.hubspot.clientId,
          client_secret: config.hubspot.clientSecret,
          redirect_uri: config.hubspot.redirectUri,
          code,
        },
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;
    const hubspotUserId = ""; // Obtain HubSpot user ID through API call if needed
    await saveTokens(hubspotUserId, access_token, refresh_token, expires_in);

    res.render("success", { message: "Authorization successful!" });
  } catch (error) {
    console.error("Error during OAuth callback:", error.message);
    res.status(500).send("Error during OAuth process");
  }
};
