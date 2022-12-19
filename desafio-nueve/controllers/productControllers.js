const { request, response } = require("express");
const products = require("../models/products");




const productControllers = (req = request, res = response) => {

  if (req.query.count) {
    const { count } = req.query;
    const productsRamdon = products.productsRandom(count)
    
    return res.status(200).json({
      status: true,
      countElement: productsRamdon.length,
      data: productsRamdon
    });
  };

  const productsRamdon = products.productsRandom()
    
  return res.status(200).json({
    status: true,
    countElement: productsRamdon.length,
    data: productsRamdon
  });
};


module.exports = {
  productControllers,
}