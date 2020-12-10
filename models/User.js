const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  history: [{ type: Schema.Types.ObjectId, ref: 'Day' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
