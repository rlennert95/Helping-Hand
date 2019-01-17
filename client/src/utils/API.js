import axios from "axios";

export default {
  // Gets all books
  getJobs: function() {
    return axios.get("/job");
  },
  // Gets the book with the given id
  getJob: function(id) {
    return axios.get("/api/job/" + id);
  },
  // Deletes the book with the given id
  deleteJob: function(id) {
    return axios.delete("/api/job/" + id);
  },
  // Saves a book to the database
  saveJob: function(jobData) {
    return axios.post("/job", jobData);
  }
};
