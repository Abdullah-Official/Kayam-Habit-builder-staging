const express = require("express");
const {startChallenge, updateChallenge, dailyComplete, getAllUserChallenges, getCurrentUserChallenge, getUserChallenges, setNotificationStatus} = require('../controllers/user-challenges')
const routes = express.Router();

routes.route("/start-challenge").post(startChallenge);
routes.route("/update-userchallenge").put(updateChallenge)
routes.route('/all-user-challenges').get(getAllUserChallenges)
routes.route("/user-challenges").post(getUserChallenges);
routes.route("/notification-status").put(setNotificationStatus)
routes.route('/current-challenge').post(getCurrentUserChallenge)
routes.route('/complete-challenge').put(dailyComplete)

module.exports = routes;