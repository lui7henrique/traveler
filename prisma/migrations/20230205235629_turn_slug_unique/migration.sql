/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `cities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cities_slug_key" ON "cities"("slug");
