const { options } = require('../configuration/options.sqlite3.js');
const knex = require('knex')(options);

knex.schema.createTable('chats', table => {
  table.string('name');
  table.string('message');
})
  .then(() => console.log('table created'))
  .catch((err) => {
    console.log(err.message);
    throw err
  })
  .finally(() => knex.destroy());