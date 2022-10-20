-- AlterTable
ALTER TABLE `Category` ADD COLUMN `image` VARCHAR(256) NULL;

-- AlterTable
ALTER TABLE `Challenges` ADD COLUMN `aceChallenge` VARCHAR(1000) NULL,
    ADD COLUMN `image` VARCHAR(256) NULL;
