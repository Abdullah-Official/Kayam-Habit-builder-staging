const express = require("express");
const {getCategories, getChallenges} = require('../controllers/categories-challenges')
const routes = express.Router();

routes.route("/categories").get(getCategories);
routes.route("/challenges").get(getChallenges)

module.exports = routes;