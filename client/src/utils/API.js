import axios from "axios";

export default {
  // get all jobs to display in listings
  getJobs: function() {
    return axios.get("/job");
  },
  // gets an individual job (based on its id)
  getJob: function(id) {
    return axios.get("/job/" + id);
  },
  // deletes an individual job (based on its id)
  deleteJob: function(id) {
    return axios.delete("/job/" + id);
  },
  // saves a job that a user creates
  saveJob: function(jobData) {
    return axios.post("/job", jobData);
  }
};
