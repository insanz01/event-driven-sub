/*
  Warnings:

  - The primary key for the `otps` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `otps` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`otp`);
