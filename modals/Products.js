var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "can't be blank"],
    },
    product_price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    product_description: {
      type: String,
      required: [true, "can't be blank"],
    },
    image_display: {
      type: Boolean,
      required: [true, "can't be blank"],
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
