/*
  Warnings:

  - You are about to alter the column `nens` on the `Persona` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.

*/
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
    CONSTRAINT "Persona_id_fkey" FOREIGN KEY ("id") REFERENCES "Taula" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Persona" ("cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum") SELECT "cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
