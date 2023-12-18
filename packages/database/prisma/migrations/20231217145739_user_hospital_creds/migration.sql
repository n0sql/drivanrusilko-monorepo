-- CreateTable
CREATE TABLE `UserServerConfig` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `serverConfigId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    INDEX `userId`(`userId`),
    INDEX `serverConfigId`(`serverConfigId`),
    UNIQUE INDEX `UserServerConfig_userId_serverConfigId_key`(`userId`, `serverConfigId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserServerConfig` ADD CONSTRAINT `UserServerConfig_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserServerConfig` ADD CONSTRAINT `UserServerConfig_serverConfigId_fkey` FOREIGN KEY (`serverConfigId`) REFERENCES `ServerConfig`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
