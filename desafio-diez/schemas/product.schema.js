const { Schema, model } = require('mongoose');

const ProductosSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  url_image: {
    type: String,
    require: true,
  },
});

ProductosSchema.method('toJSON', function () {
  const { __v, _id, ...productos } = this.toObject();
  productos.id = _id;
  return productos;
});

module.exports = model('Productos', ProductosSchema);