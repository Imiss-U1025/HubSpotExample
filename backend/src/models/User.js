const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, default: function() { return new mongoose.Types.ObjectId(); } },
  name: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: false },
  phone_number: { type: String, required: false },
  userrole: { type: Number,},
});

module.exports = mongoose.model('User', UserSchema);
