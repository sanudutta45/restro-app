const mongoose = require("mongoose");

/**
 * @private
 */

const categorySchema = new mongoose.Schema(
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef users
 */

module.exports = mongoose.model("categories", categorySchema);
