const User = require('../models/User');
const axios = require('axios');
const config = require('../config/config');

exports.saveTokens = async (hubspotUserId, accessToken, refreshToken, expiresIn) => {
  const tokenExpiresAt = new Date(Date.now() + expiresIn * 1000);
  const user = await User.findOneAndUpdate(
    { hubspotUserId },
    { accessToken, refreshToken, tokenExpiresAt },
    { upsert: true, new: true }
  );
  return user;
};

exports.getValidAccessToken = async (hubspotUserId) => {
  const user = await User.findOne({ hubspotUserId });

  if (new Date() > user.tokenExpiresAt) {
    return await refreshAccessToken(user);
  }

  return user.accessToken;
};

async function refreshAccessToken(user) {
  try {
    const response = await axios.post('https://api.hubapi.com/oauth/v1/token', null, {
      params: {
        grant_type: 'refresh_token',
        client_id: config.hubspot.clientId,
        client_secret: config.hubspot.clientSecret,
        refresh_token: user.refreshToken,
      },
    });

    const { access_token, expires_in } = response.data;
    user.accessToken = access_token;
    user.tokenExpiresAt = new Date(Date.now() + expires_in * 1000);
    await user.save();

    return access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error.message);
    throw error;
  }
}
