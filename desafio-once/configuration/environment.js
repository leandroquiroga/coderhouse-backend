const environment = {
  PORT: process.env.PORT || '',
  URI: process.env.URI || 8000,
  PASSPORT_SECRET: process.env.PASSPORT_SECRET || '',
  EXPIRATION_TIME: Number(process.env.EXPIRATION_TIME) || 10000,
  URI_DB: process.env.URI_DB || ''
};

module.exports = { environment };