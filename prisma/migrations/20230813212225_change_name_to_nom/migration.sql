/*
  Warnings:

  - You are about to drop the column `name` on the `Persona` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Persona` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "adults" INTEGER NOT NULL DEFAULT 1,
    "nens" INTEGER NOT NULL DEFAULT 0,
    "veggi" BOOLEAN NOT NULL DEFAULT false,
    "veggiNum" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Persona" ("adults", "id", "nens", "telefon", "veggi", "veggiNum") SELECT "adults", "id", "nens", "telefon", "veggi", "veggiNum" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
