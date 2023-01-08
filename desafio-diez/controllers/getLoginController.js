const { request, response } = require("express");


const loginController = (req = request, res = response) => {
  res.status(200).json({
    message: 'OK',
    state: true,
    status: 200
  })
};

module.exports = loginController;