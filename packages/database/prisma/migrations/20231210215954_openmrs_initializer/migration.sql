-- CreateTable
CREATE TABLE `ServerConfig` (
    `id` VARCHAR(191) NOT NULL,
    `basePath` VARCHAR(191) NOT NULL,
    `hospitalName` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL DEFAULT '',
    `providerId` VARCHAR(191) NULL,
    `providerName` VARCHAR(191) NULL,
    `locationUuid` VARCHAR(191) NULL,
    `locationTag` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `password` VARCHAR(191) NOT NULL DEFAULT 'Admin123',

    UNIQUE INDEX `ServerConfig_hospitalName_key`(`hospitalName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChildLocation` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `parentLocationName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServerConfig` ADD CONSTRAINT `ServerConfig_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChildLocation` ADD CONSTRAINT `ChildLocation_parentLocationName_fkey` FOREIGN KEY (`parentLocationName`) REFERENCES `ServerConfig`(`hospitalName`) ON DELETE CASCADE ON UPDATE CASCADE;
