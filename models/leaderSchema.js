const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
    },
    description: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Leaders = mongoose.model("Leader", leaderSchema);
module.exports = Leaders;
