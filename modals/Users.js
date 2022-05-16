var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      lowercase: true,
      unique: [true, "Phone number already exist."],
      required: [true, "can't be blank"],
      match: [
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "is invalid",
      ],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    password: String,
    role: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
