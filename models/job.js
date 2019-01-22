const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobType: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  timeframe: { type: String, required: true  },
  username: { type: String, unique: false, required: false },
  email: {type: String, unique: false, required: false},
	first_name: {type: String, unique: false, required: false},
	last_name: {type: String, unique: false, required: false},
	street: {type: String, unique: false, required: false},
	city: {type: String, unique: false, required: false},
	zipcode: {type: String, unique: false, required: false},
	phone: {type: String, unique: false, required: false},
	business: {type: String, unique: false, required: false},
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
