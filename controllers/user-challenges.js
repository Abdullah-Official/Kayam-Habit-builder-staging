const response = require("../helpers/response");
const moment = require("moment");
const { prisma } = require("../helpers/prisma-client");

const dateEnumerator = (startDateTime, endDateTime) => {
  var dates = [];

  var currDate = moment(startDateTime).startOf("day");
  var lastDate = moment(endDateTime).startOf("day");
  let i = 0;
  while (currDate.add(i == 0 ? 0 : 1, "days").diff(lastDate) < 0) {
    // console.log(currDate.toDate());
    dates.push(currDate.clone().toDate().toDateString());
    i++;
  }

  return dates;
};

async function startChallenge(req, res) {
  const { userId, challengeId } = req.body;
  const startDateTime = new Date().toISOString();
  const endDateTime = moment(startDateTime).add(7, "days").toISOString();
  try {
    const challenge = await prisma.challenges.findUnique({
      where: {
        id: challengeId,
      },
    });
    // const userChallenge = await prisma.userChallenge.findFirst({
    //   where: { userId, isInProgress: true},
    // });
    if (challenge?.id) {
      const notification = await prisma.notifications.create({
        data: {
          userId,
          time: new Date().toLocaleTimeString(),
          activeTillDateTime: endDateTime,
        },
      });
      if (notification?.id) {
        const userChallenge = await prisma.userChallenge.create({
          data: {
            notificationId: notification?.id,
            userId,
            challengeId,
            isPending: true,
            startDateTime,
            endDateTime,
          },
        });
        if (userChallenge?.id) {
          res.status(200).json({ success: true, userChallenge, notification });
        } else {
          response.sendBadRequest(res, "Can't create User Challenge");
        }
      }
    } else {
      response.sendBadRequest(res, "No Challenge Found!");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
}

const updateChallenge = async (req, res) => {
  const {
    id,
    userId,
    score,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    isInProgress,
    isCompleted,
    isPending,
  } = req.body;
  const isChallengeExist = await prisma.userChallenge.findUnique({
    where: { id },
  });
  try {
    if (isChallengeExist?.userId === userId) {
      const userChallenge = await prisma.userChallenge.update({
        data: {
          score: score || isChallengeExist?.score,
          day1: day1 || isChallengeExist?.day1,
          day2: day2 || isChallengeExist?.day2,
          day3: day3 || isChallengeExist?.day3,
          day4: day4 || isChallengeExist?.day4,
          day5: day5 || isChallengeExist?.day5,
          day6: day6 || isChallengeExist?.day6,
          day7: day7 || isChallengeExist?.day7,
          isInProgress: isInProgress || isChallengeExist?.isInProgress,
          isCompleted: isCompleted || isChallengeExist?.isCompleted,
          isPending: isPending || isChallengeExist?.isPending,
        },
        where: {
          id,
        },
      });
      if (userChallenge?.id) {
        res.status(200).json({ success: true, userChallenge });
      } else {
        response.sendBadRequest(
          res,
          "There is no challenge exist with this id"
        );
      }
    } else {
      response.sendBadRequest(res, "Invalid User ID");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const getAllUserChallenges = async (req, res) => {
  try {
    const userChallenge = await prisma.userChallenge.findMany({
      include: { notification: true },
    });
    if (userChallenge) {
      res.status(200).json({ success: true, userChallenge });
    } else {
      response.sendBadRequest(res, "There are no user challenges");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const getUserChallenges = async (req, res) => {
  const { userId } = req.body;
  try {
    const userChallenge = await prisma.userChallenge.findMany({
      where: { userId },
      include: { notification: true },
    });
    if (userChallenge.length) {
      res.status(200).json({ success: true, userChallenge });
    } else {
      response.sendBadRequest(res, "There are no user challenges");
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const getCurrentUserChallenge = async (req, res) => {
  const { userId } = req.body;
  try {
    const userChallenge = await prisma.userChallenge.findFirst({
      where: { userId, isInProgress: true },
      include: { notification: true },
    });
    if (userChallenge) {
      res.status(200).json({ success: true, userChallenge });
    } else {
      response.sendBadRequest(
        res,
        "There is no user challenge exist with this userId"
      );
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const setNotificationStatus = async (req, res) => {
  const { notificationId, isActive } = req.body;

  try {
    const notification = await prisma.notifications.update({
      data: { isActive },
      where: { id: notificationId },
    });
    if (notification) {
      res.status(200).json({ success: true, notification });
    } else {
      response.sendBadRequest(
        res,
        "Invalid Notification ID. Can't update status"
      );
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

const dailyComplete = async (req, res) => {
  const { userChallengeId, userId, score } = req.body;
  try {
    const userChallenge = await prisma.userChallenge.findFirst({
      where: { id: userChallengeId, userId, isInProgress: true },
    });
    if (!userChallenge) {
      return response.sendBadRequest(
        res,
        "No User Challenge found with the given details"
      );
    }
    const dates = dateEnumerator(
      userChallenge?.startDateTime,
      userChallenge?.endDateTime
    );

    const todayDate = new Date().toDateString();
    const index = dates.indexOf(todayDate);
    if (index >= 0 && index !== 6) {
      const updatedChallenge = await prisma.userChallenge.update({
        data: {
          [`day${index + 1}`]: true,
        },
        where: {
          id: userChallengeId,
        },
      });
      res.status(200).json({ success: true, updatedChallenge });
    } else if (index === 6) {
      const updatedChallenge = await prisma.userChallenge.update({
        data: {
          ["isInProgress"]: false,
          ["isCompleted"]: true,
          [`day${index + 1}`]: true,
          ["isPending"]: false,
          score
        },
        where: {
          id: userChallengeId,
        },
      });
      res.status(200).json({ success: true, updatedChallenge });
    } else {
      response.sendBadRequest(
        res,
        "Can't update user challenge, maybe your challenge is completed"
      );
    }
  } catch (error) {
    response.sendBadRequest(res, error?.message);
  }
};

module.exports = {
  startChallenge,
  updateChallenge,
  getAllUserChallenges,
  getUserChallenges,
  setNotificationStatus,
  getCurrentUserChallenge,
  dailyComplete,
};
