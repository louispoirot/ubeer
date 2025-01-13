/*
  Warnings:

  - You are about to drop the column `brewery` on the `brewery` table. All the data in the column will be lost.
  - Added the required column `name` to the `brewery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `brewery` DROP COLUMN `brewery`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
