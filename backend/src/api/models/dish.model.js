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
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "categories"
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