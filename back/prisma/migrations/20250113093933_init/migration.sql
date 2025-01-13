-- CreateTable
CREATE TABLE `beers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `beer` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `brewery_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brewery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brewery` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `beer_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `beers` ADD CONSTRAINT `beers_brewery_id_fkey` FOREIGN KEY (`brewery_id`) REFERENCES `brewery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_beer_id_fkey` FOREIGN KEY (`beer_id`) REFERENCES `beers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
