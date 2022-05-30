const { ObjectId } = require("mongodb");
var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema(
  {
    product_id: {
      type: ObjectId,
      required: [true, "can't be blank"],
    },
    user_id: {
      type: ObjectId,
      required: [true, "can't be blank"],
    },
    quantity: {
      type: Number,
      required: [true, "can't be blank"],
    },
    amount: {
      type: Number,
      required: [true, "can't be blank"],
    },
    product_name: {
      type: String,
      required: [true, "can't be blank"],
    },
    product_price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    user_email: {
      type: String,
      required: [true, "can't be blank"],
    },
    user_address: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
