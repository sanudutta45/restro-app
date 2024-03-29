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
    rating:{
      type: Number,
      default: 0,
    },
    openAt: {
      type: Number,
      trim: true,
    },
    closeAt: {
      type: Number,
      trim: true,
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
