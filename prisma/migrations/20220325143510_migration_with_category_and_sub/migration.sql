/*
  Warnings:

  - Added the required column `description` to the `Subcategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subId` to the `Subcategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subcategory" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "subId" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Sub" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Sub_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
