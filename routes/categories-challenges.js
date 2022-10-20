const express = require("express");
const {getCategories, getChallenges, getChallengesByCategoryId} = require('../controllers/categories-challenges')
const routes = express.Router();

routes.route("/categories").get(getCategories);
routes.route("/challenges").get(getChallenges)
routes.route("/challenges").post(getChallengesByCategoryId)
module.exports = routes;