/*
  Warnings:

  - You are about to drop the column `description` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Subcategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sub" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "url",
ADD COLUMN     "sub_description" TEXT,
ADD COLUMN     "sub_image" TEXT,
ADD COLUMN     "sub_name" VARCHAR(255),
ADD COLUMN     "sub_url" TEXT;
