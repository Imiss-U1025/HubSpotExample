// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true, default: function() { return new mongoose.Types.ObjectId(); } },
//   name: { type: String},
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   accesstoken: { type: String, required: false },
//   payment_status: { type: Boolean, required: true },
// });

// module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  hubspotUserId: String,
  accessToken: String,
  refreshToken: String,
  tokenExpiresAt: Date,
});

module.exports = mongoose.model('User', userSchema);
