const environment = {
  PORT        : process.env.PORT || 3000,
  SQL_HOST    : process.env.SQL_SERVER || 'localhost',
  SQL_PORT    : process.env.SQL_PORT || '',
  SQL_USER    : process.env.SQL_USER || 'root',
  SQL_PASS    : process.env.SQL_PASS || '' ,
  SQL_DATABASE: process.env.SQL_DATABASE || 'ecommerce' ,
};

module.exports = environment;