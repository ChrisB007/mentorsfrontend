/*
  Warnings:

  - You are about to drop the column `bgColor` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `sub_description` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `sub_image` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `sub_name` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `sub_url` on the `Subcategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "bgColor";

-- AlterTable
ALTER TABLE "Sub" ADD COLUMN     "category" TEXT,
ALTER COLUMN "categoryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "sub_description",
DROP COLUMN "sub_image",
DROP COLUMN "sub_name",
DROP COLUMN "sub_url",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" VARCHAR(255),
ADD COLUMN     "url" TEXT,
ALTER COLUMN "categoryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Role" DROP NOT NULL,
ALTER COLUMN "Role" SET DEFAULT E'MENTEE';

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
