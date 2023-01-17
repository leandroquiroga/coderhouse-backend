const bcryprt = require('bcrypt');

const checkPassword = (user, password) => bcryprt.compareSync(password, user.password);

const createHash = (password) => {
  return bcryprt.hashSync(
    password,
    bcryprt.genSaltSync(10),
    null
  )
}

module.exports = {
  checkPassword,
  createHash
}