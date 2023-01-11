const { request, response } = require("express");


const signoutController = (req = request, res = response) => {

  req.session.destroy(err => {
    if (err)
      return res.status(500).json({
        success: false,
        message: err.message
      });
      
      
    res.clearCookie('Nombre')
    res.status(200).json({
      success: true,
      message: 'OK'
    })
  });

};

module.exports = signoutController;