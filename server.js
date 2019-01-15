const express = require("express");
const app = express();
const session = require('express-session')
const dbConnection = require('./models') 
const MongoStore = require('connect-mongo')(session) //MAY NEED THIS TO STORE SESSIONS
const passport = require('./passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));  //Spits out an error whenever you click something [0] Error: ENOENT: no such file or directory, stat 'C:\Users\ryanl\OneDrive\Desktop\Solved\client\build\index.html'

}
// Sessions
// app.use(
// 	session({
// 		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

app.use(session({ secret: "secret", resave: false, saveUninitialized: false, cookie: {secure: false, maxAge: 3600000 } }));

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser //MIGHT NEED TO REDO HOW THIS IS DONE IN SERVER



// Define middleware here

// Add routes, both API and view
app.use(routes);




// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newusers").then(console.log("connected to mongoose from server.js in root"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
