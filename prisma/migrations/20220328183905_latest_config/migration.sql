/*
  Warnings:

  - You are about to drop the column `icon` on the `Sub` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `Subcategory` table. All the data in the column will be lost.
  - Added the required column `url` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "bgColor" VARCHAR(255),
ADD COLUMN     "description" VARCHAR(255),
ADD COLUMN     "icon" VARCHAR(255),
ADD COLUMN     "url" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Sub" DROP COLUMN "icon",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "icon",
ADD COLUMN     "bgColor" TEXT,
ADD COLUMN     "image" TEXT;
