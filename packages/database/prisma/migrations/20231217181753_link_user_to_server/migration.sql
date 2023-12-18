/*
  Warnings:

  - You are about to drop the `_serverConfigs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `locationUUID` to the `UserServerConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUUID` to the `UserServerConfig` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_serverConfigs` DROP FOREIGN KEY `_serverConfigs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_serverConfigs` DROP FOREIGN KEY `_serverConfigs_B_fkey`;

-- AlterTable
ALTER TABLE `UserServerConfig` ADD COLUMN `locationUUID` VARCHAR(191) NOT NULL,
    ADD COLUMN `userUUID` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_serverConfigs`;
