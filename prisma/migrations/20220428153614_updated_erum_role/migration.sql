/*
  Warnings:

  - The values [ADMIN,MENTOR,MENTEE] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('Admin', 'Mentee', 'Mentor');
ALTER TABLE "User" ALTER COLUMN "Role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "Role" TYPE "Role_new" USING ("Role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "Role" SET DEFAULT 'Mentee';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Role" SET DEFAULT E'Mentee';
