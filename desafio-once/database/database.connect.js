const mongoose = require('mongoose');
const { environment } = require('../configuration/environment');

const dbConnect = async () => {
  try {
    await mongoose.connect(environment.URI_DB);
    console.log('Data base connect');
  } catch (error) {
    throw new Error('Error! Please contact with administrator');
  }
}; 

module.exports = dbConnect;