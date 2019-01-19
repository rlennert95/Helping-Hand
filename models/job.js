const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobType: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  timeframe: { type: String, required: true  },
  username: { type: String, unique: false, required: false },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
