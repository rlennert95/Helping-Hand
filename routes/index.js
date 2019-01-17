const path = require("path");
const router = require("express").Router();

const user = require('./user');
const job = require('./jobs');

// API Routes

router.use("/user", user);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


router.use("/job", job);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;