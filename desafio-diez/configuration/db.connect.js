const mongoose = require('mongoose');
const { envieroment } = require('../configuration/envieroment');

const dbConnect = async () => {
  try {
    await mongoose.connect(envieroment.URI_DB);
    console.log('Data base connect');
  } catch (error) {
    throw new Error('Error! Please contact with administrator');
  }
}; 

module.exports = dbConnect;