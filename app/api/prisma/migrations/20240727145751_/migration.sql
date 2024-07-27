/*
  Warnings:

  - You are about to drop the column `name` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `stock` table. All the data in the column will be lost.
  - Added the required column `category` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stock" DROP COLUMN "name",
DROP COLUMN "updated",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "product" TEXT NOT NULL,
ALTER COLUMN "deliveryDate" DROP NOT NULL,
ALTER COLUMN "detail" DROP NOT NULL;
