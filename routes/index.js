const express = require('express');
const userChallenges = require('./user-challenges')
const router = express.Router();
const {authMiddleware} = require('../middlewares/index')

router.use('/habits', userChallenges)


module.exports = router;