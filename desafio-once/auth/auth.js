const bCryprt = require('bcrypt');

const checkPassword = (user, password) => bCryprt.compare(password, user.password);

const createHash = (password) => {
  return bCryprt.hashSync(
    password,
    bCryprt.genSaltSync(10),
    null
  )
}

module.exports = {
  checkPassword,
  createHash
}