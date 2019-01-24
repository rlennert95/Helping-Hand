const router = require("express").Router();
// const UserController = require("../../controllers/usercontroller");
const passport = require("../passport");
const User = require("../models/user");
const nodeMailer = require("nodemailer");
let CurrentUser = {};

// // Matches with "/api/User"
// router.route("/")
//   .get(UserController.findAll)
//   //.post(UserController.create);

// // Matches with "/api/User/:id"
// router
//   .route("/:id")
//   .get(UserController.findById)
//   .put(UserController.update)
//   .delete(UserController.remove);

router.post("/", (req, res) => {
  console.log("user signup");

  const {
    username,
    password,
    contractor,
    email,
    first_name,
    last_name,
    street,
    city,
    zipcode,
    phone,
    business
  } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
        contractor: contractor,
        email: email,
        first_name: first_name,
        last_name: last_name,
        street: street,
        city: city,
        zipcode: zipcode,
        phone: phone,
        business: business
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        let transporter = nodeMailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "willcode4tacos@gmail.com",
            pass: "CodePhila7676"
          }
        });
        let mailOptions = {
          from: '"Helping Hand" <willcode4tacos@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Welcome to Helping Hand!", // Subject line
          html: "Hello, " + username + ". Thank you for signing up with Helping Hand. Your account is now active. " // plain text body
          // html: '<b>NodeJS Email</b>' // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Message %s sent: %s", info.messageId, info.response);
          res.json(savedUser);
        });
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged innnnnnn", req.user);
    CurrentUser = req.user;
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");

  console.log(req.user);
  console.log("===== CURRENT USER ======");
  console.log(CurrentUser);
  if (req.user) {
    res.json({ CurrentUser });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

router.get("/allusers", function(req, res) {
  console.log("All users route was hit!");
  // get all users and send them back in a json blob
  User.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
