-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cognom" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "adults" INTEGER NOT NULL DEFAULT 1,
    "nens" INTEGER NOT NULL DEFAULT 0,
    "veggi" BOOLEAN NOT NULL DEFAULT false,
    "veggiNum" INTEGER NOT NULL DEFAULT 0,
    "taula" INTEGER
);
INSERT INTO "new_Persona" ("cognom", "id", "name", "nens", "taula", "telefon", "veggi", "veggiNum") SELECT "cognom", "id", "name", "nens", "taula", "telefon", "veggi", "veggiNum" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
