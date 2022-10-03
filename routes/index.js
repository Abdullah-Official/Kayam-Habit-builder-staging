const express = require('express');
const userChallenges = require('./user-challenges')
const categoryChallenges = require('./categories-challenges')
const router = express.Router();
const {authMiddleware} = require('../middlewares/index')

router.use('/habits', [userChallenges, categoryChallenges])


module.exports = router;