const path = require('path');

const options = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../data/ecommerceDB.sqlite' )
  },
  userNullAsDefault: true,
};


module.exports = {
  options
}