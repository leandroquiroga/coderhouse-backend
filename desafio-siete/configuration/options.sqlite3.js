const options = {
  client: 'sqlite3',
  connection: {
    filename: './../database/ecommerceDB.sqlite', 
  },
  userNullAsDefault: true,
};


module.exports = {
  options
}