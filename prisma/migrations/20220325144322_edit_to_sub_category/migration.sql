-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_subId_fkey";

-- AlterTable
ALTER TABLE "Sub" ADD COLUMN     "subcategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Sub" ADD CONSTRAINT "Sub_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
