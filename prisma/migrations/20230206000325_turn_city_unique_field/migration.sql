/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "cities_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");
