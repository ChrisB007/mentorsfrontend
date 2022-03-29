/*
  Warnings:

  - You are about to drop the column `bgColor` on the `Subcategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "bgColor",
ALTER COLUMN "description" DROP NOT NULL;
