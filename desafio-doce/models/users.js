const UserSchema = require('../schemas/users');

class User {
  constructor() {
    this.user = {};
  };

  async getUser(email) {

    console.log(email);
    try {
      this.user = await UserSchema.findOne({email});
      return this.user;
    } catch (error) {
      throw new Error(error);
    };
  };
};

const user = new User();

module.exports = user;