const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration-form', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a MongoDB schema and model for the user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (like HTML and CSS)
app.use(express.static('public'));

// Handling POST request for user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user
  const newUser = new User({
    username,
    email,
    password
  });

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error registering user');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
