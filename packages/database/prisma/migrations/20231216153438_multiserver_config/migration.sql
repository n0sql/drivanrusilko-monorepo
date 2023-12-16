-- DropForeignKey
ALTER TABLE `ServerConfig` DROP FOREIGN KEY `ServerConfig_userId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('USER', 'ADMIN', 'STAFF') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `_serverConfigs` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_serverConfigs_AB_unique`(`A`, `B`),
    INDEX `_serverConfigs_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServerConfig` ADD CONSTRAINT `ServerConfig_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_serverConfigs` ADD CONSTRAINT `_serverConfigs_A_fkey` FOREIGN KEY (`A`) REFERENCES `ServerConfig`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_serverConfigs` ADD CONSTRAINT `_serverConfigs_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
