const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  image_url: {
    type: String,
    require: true
  },
});

ProductSchema.method('toJSON', function () {
  const { __v, _id, ...product } = this.toObject(); 
  productos.id = id;
  return product;
});

module.exports = model('Products', ProductSchema)