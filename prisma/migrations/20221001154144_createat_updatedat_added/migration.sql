/*
  Warnings:

  - Added the required column `createdAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Challenges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Challenges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `UserChallenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserChallenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Challenges` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Notifications` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `UserChallenge` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
