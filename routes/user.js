const router = require("express").Router();
// const UserController = require("../../controllers/usercontroller");
const passport = require('../passport')
const User = require('../models/user')

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

  router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, contractor, email, first_name, last_name, street, city, zipcode, phone } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
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
                phone: phone
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged innnnnnn', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})



router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.get("/allusers", function(req, res) {
    console.log("All users route was hit!");
    // get all users and send them back in a json blob
    User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  router.get("/current_user", function(req, res) {
    console.log("/current_user route was hit!");
    if (req.user) {
       const id = req.user._id
       

       User
       .findById({})
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
    } else {
        res.send({ msg: 'no user' })
    }
   
//just finds the first user in the allusers array, we want to grab the current user

  })
  

module.exports = router;
