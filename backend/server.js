// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback';

let accessToken = '';

app.use(bodyParser.urlencoded({ extended: true }));

// Redirect to HubSpot OAuth URL
app.get('/oauth', (req, res) => {
  const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${CLIENT_ID}&scope=contacts%20content&redirect_uri=${REDIRECT_URI}`;
  res.redirect(authUrl);
});

// OAuth callback endpoint
app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post('https://api.hubapi.com/oauth/v1/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
      },
    });
    accessToken = response.data.access_token;
    res.send('Authorization successful');
  } catch (error) {
    res.send('Error during authorization');
  }
});

// Example endpoint to get contacts
app.get('/contacts', async (req, res) => {
  try {
    const response = await axios.get('https://api.hubapi.com/contacts/v1/lists/all/contacts/all', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    res.send('Error fetching contacts');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
