const response = require("../helpers/response");
const { prisma } = require("../helpers/prisma-client");

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    if (categories.length) {
      res.status(200).json({ success: true, categories });
    } else {
      response.sendBadRequest(res, "There are no categories");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const getChallenges = async (req, res) => {
  try {
    const challenges = await prisma.challenges.findMany({include: {category:true}});
    if (challenges.length) {
      res.status(200).json({ success: true, challenges });
    } else {
      response.sendBadRequest(res, "There are no challenges");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

module.exports = { getCategories, getChallenges };
