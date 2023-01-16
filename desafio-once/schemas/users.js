const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...user } = this.Object();
  user.id = _id;
  return user;
});

module.exports = model('User', UserSchema);