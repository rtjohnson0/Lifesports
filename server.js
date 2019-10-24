////////////////////////////////
////     Road to Hire      ////
///     LifeSports App     ///
/////////////////////////////
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;
let uri = ""

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// const User = require('./models/user.model.js')
// const Exercise = require('./models/exercise.model.js')
// User.create([
//   {
//     "username": "daisha"
//   },
//   {
//     "username": "arely"
//   }
// ])

// Exercise.create([
//   {
//     "username": "daisha",
//     "description": "running",
//     "duration": "60",
//     "date": "2019-10-16"
//   }
// ])


// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI  // connection string for Atlas here  
} else {
<<<<<<< HEAD
  // uri = process.env.LOCAL_URI   // connection string for localhost mongo here  
  uri = process.env.LOCAL_URI
}

// connection to database
mongoose.connect(process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
=======
  uri = process.env.ATLAS_URI
  //"mongodb://localhost/Lifesports"
}

// connection to database
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
);
>>>>>>> Daisha
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})

// register api catalogue
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
