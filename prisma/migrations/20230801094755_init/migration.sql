-- CreateTable
CREATE TABLE "Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taulaNum" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cognom" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "nens" BOOLEAN NOT NULL DEFAULT false,
    "veggi" BOOLEAN NOT NULL DEFAULT false,
    "veggiNum" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Persona_taulaNum_fkey" FOREIGN KEY ("taulaNum") REFERENCES "Taula" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Taula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
