-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sub" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" ALTER COLUMN "url" DROP NOT NULL;
