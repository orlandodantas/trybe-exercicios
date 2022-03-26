const express = require('express');
const rescue = require('express-rescue');
const serverFail = require('../../middleware/serverFail');
const router = express.Router();

router.use(express.json());

// Credits: Regex retirado do link: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript Author: C. Lee em 29-07-2021;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post('/register', rescue((req, res) => {
  const { username, email, password } = req.body;

  const usernameValid = username && username.length > 3;
  const passwordValid = password && (password.length > 4 && password.length < 8);
  const emailValid = validateEmail(email);

  if (usernameValid && passwordValid && emailValid) {
    return res.status(201).json({ "message": "user created" });
  }

  res.status(400).json({ "message": "invalid data" });
}));

router.post('/login', rescue((req, res) => {
  const { email, password } = req.body;

  const passwordValid = password && (password.length > 4 && password.length < 8);
  const emailValid = validateEmail(email);

  if (passwordValid && emailValid) {
    return res.status(200).json({ "token": "86567349784e" });
  }

  res.status(400).json({ "message": "email or password is incorrect" });
}));

router.use(serverFail);

module.exports = router;
