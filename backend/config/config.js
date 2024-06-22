module.exports = {
    hubspot: {
      clientId: process.env.HUBSPOT_CLIENT_ID,
      clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
      redirectUri: process.env.HUBSPOT_REDIRECT_URI,
      scopes: 'contacts content email'
    },
    database: {
      uri: process.env.MONGODB_URI
    }
  };
  