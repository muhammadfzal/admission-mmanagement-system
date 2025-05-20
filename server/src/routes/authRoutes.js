const express = require('express');
const router = express.Router();

const { signUp, signIn } = require('../controller/authController');

router.post('/signup', signUp);
router.post('/signIn', signIn)

module.exports = router;
