const mongoose = require("mongoose");

/**
 * @private
 */

const usersSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      maxlength: 128,
      trim: true,
    },
    category: {
      type: Array,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef users
 */

module.exports = mongoose.model("users", usersSchema, "users");
