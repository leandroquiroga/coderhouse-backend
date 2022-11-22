const { options } = require('../configuration/options.mariaDB.js');
const knex = require('knex')(options);

knex.schema.createTable('products', table => {
  table.increments('id');
  table.string('name');
  table.string('url_imagen');
  table.string('user');
  table.integer('price');
})
  .then(() => console.log('table created'))
  .catch((err) => {
    console.log(err.message);
    throw err
  })
  .finally(() => knex.destroy());