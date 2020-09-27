const mongoose = require("mongoose");

/**
 * @private
 */

const dishSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      maxlength: 128,
      trim: true,
    },
    category: {
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
 * @typedef menu
 */

 module.exports = mongoose.model("dishes",dishSchema);