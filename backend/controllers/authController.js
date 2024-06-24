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
  const clientId = process.env.HUBSPOT_CLIENT_ID;
  const clientSecret = process.env.HUBSPOT_CLIENT_SECRET;
  const redirectUri = process.env.HUBSPOT_REDIRECT_URI;

  const formData = {
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code: code
  };
  try {
  const response = await axios.post('https://api.hubapi.com/oauth/v1/token', new URLSearchParams(formData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log(response);
    accessToken = response.data.access_token;
    // res.status(200).json(accessToken);
    res.redirect(`http://localhost:3000/authorize?accessToken=${accessToken}`);
  } catch (error) {
    console.error("Error during OAuth callback:", error.message);
    res.status(500).send("Error during OAuth process");
  }
};
