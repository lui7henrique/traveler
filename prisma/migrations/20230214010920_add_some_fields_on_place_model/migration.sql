/*
  Warnings:

  - Added the required column `address` to the `places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighbourhood` to the `places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `places` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TURISM', 'EVENT', 'FOOD');

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'TURISM',
ADD COLUMN     "neighbourhood" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL;
