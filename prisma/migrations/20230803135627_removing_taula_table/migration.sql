/*
  Warnings:

  - You are about to drop the `Taula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Taula";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cognom" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "nens" INTEGER NOT NULL DEFAULT 0,
    "veggi" BOOLEAN NOT NULL DEFAULT false,
    "veggiNum" INTEGER NOT NULL DEFAULT 0,
    "taula" INTEGER
);
INSERT INTO "new_Persona" ("cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum") SELECT "cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
