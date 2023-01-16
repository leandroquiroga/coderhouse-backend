const ProductSchema = require('./../schemas/products');

class Product {
  constructor() {
    this.products = [];
    this.product = {};
  };

  async getProductDB() {
    try {
      this.products = await ProductSchema.find();
      return this.products;
    } catch (error) {
      throw new Error(error);
    };
  };

  async newProduct(data) {
    try {
      this.product = new ProductSchema(data);
      await this.product.save();
    } catch (error) {
      throw new Error
    }
  }
};

const product = new Product();

module.exports = product;