-- AlterTable
ALTER TABLE `UserServerConfig` ADD COLUMN `personUUID` VARCHAR(191) NULL,
    ADD COLUMN `providerUUID` VARCHAR(191) NULL;