/*
  Warnings:

  - You are about to drop the column `taulaNum` on the `Persona` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cognom" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "nens" BOOLEAN NOT NULL DEFAULT false,
    "veggi" BOOLEAN NOT NULL DEFAULT false,
    "veggiNum" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Persona_id_fkey" FOREIGN KEY ("id") REFERENCES "Taula" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Persona" ("cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum") SELECT "cognom", "id", "name", "nens", "telefon", "veggi", "veggiNum" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
