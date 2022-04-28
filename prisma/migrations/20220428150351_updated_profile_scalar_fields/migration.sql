/*
  Warnings:

  - Added the required column `free` to the `Rate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paid` to the `Rate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "approach" TEXT,
ADD COLUMN     "curicullum" TEXT,
ADD COLUMN     "outcome" TEXT,
ADD COLUMN     "schedule" TEXT;

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "approach" TEXT,
ADD COLUMN     "benefits" TEXT;

-- AlterTable
ALTER TABLE "Rate" ADD COLUMN     "free" BOOLEAN NOT NULL,
ADD COLUMN     "paid" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "announcementId" INTEGER;

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" INTEGER,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
