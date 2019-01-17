const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobType: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  timeframe: { type: String, required: true  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
