/*
  Warnings:

  - You are about to drop the column `createdAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `linkPrecedence` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `linkedId` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contact` table. All the data in the column will be lost.
  - Added the required column `linkedid` to the `contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkprecedence` to the `contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contact" DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "linkPrecedence",
DROP COLUMN "linkedId",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "linkedid" INTEGER NOT NULL,
ADD COLUMN     "linkprecedence" TEXT NOT NULL,
ADD COLUMN     "phonenumber" TEXT NOT NULL,
ADD COLUMN     "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
