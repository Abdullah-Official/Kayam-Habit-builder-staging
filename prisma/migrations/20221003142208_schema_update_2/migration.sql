/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Notifications` table. All the data in the column will be lost.
  - You are about to drop the column `userChallengeId` on the `Notifications` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[notificationId]` on the table `UserChallenge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `time` to the `Notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notificationId` to the `UserChallenge` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Notifications` DROP FOREIGN KEY `Notifications_userChallengeId_fkey`;

-- AlterTable
ALTER TABLE `Notifications` DROP COLUMN `dateTime`,
    DROP COLUMN `userChallengeId`,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserChallenge` ADD COLUMN `notificationId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `UserChallenge_notificationId_key` ON `UserChallenge`(`notificationId`);

-- AddForeignKey
ALTER TABLE `UserChallenge` ADD CONSTRAINT `UserChallenge_notificationId_fkey` FOREIGN KEY (`notificationId`) REFERENCES `Notifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
