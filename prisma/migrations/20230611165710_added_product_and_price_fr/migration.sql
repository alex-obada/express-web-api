/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "store" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "created" DATETIME NOT NULL,
    "createdByID" INTEGER,
    CONSTRAINT "Product_createdByID_fkey" FOREIGN KEY ("createdByID") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("barcode", "created", "description", "id", "store") SELECT "barcode", "created", "description", "id", "store" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
