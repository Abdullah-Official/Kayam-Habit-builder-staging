const express = require("express");
const {
    startChallenge
} = require("../controllers/user-challenges.js");
const routes = express.Router();

routes.route("/start-challenge").post(startChallenge);

module.exports = routes;