/*
  Warnings:

  - You are about to alter the column `price` on the `item` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `item` MODIFY `price` VARCHAR(191) NOT NULL;
