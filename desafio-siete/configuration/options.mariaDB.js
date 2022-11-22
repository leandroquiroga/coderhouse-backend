const environment = require("./enviroment.js");

const options = {
  client: 'mysql',
  connection: {
    host    : environment.SQL_HOST,
    port    : environment.SQL_PORT,
    user    : environment.SQL_USER,
    password: environment.SQL_PASS,
    database: environment.SQL_DATABASE,
  }
}

module.exports = {
  options
}