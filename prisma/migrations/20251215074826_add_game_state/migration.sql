-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musics" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "fileUrl" VARCHAR(100) NOT NULL,
    "duration" INTEGER NOT NULL,
    "musicCategory_id" INTEGER NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicFavorite" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "music_id" INTEGER NOT NULL,

    CONSTRAINT "musicFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "musicCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focusSession" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "focusSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focusTimerSession" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "focusSession_id" INTEGER NOT NULL,

    CONSTRAINT "focusTimerSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameStates" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "boardState" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "nextBlocks" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gameStates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_musicCategory_id_fkey" FOREIGN KEY ("musicCategory_id") REFERENCES "musicCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musicFavorite" ADD CONSTRAINT "musicFavorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musicFavorite" ADD CONSTRAINT "musicFavorite_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "musics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focusTimerSession" ADD CONSTRAINT "focusTimerSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focusTimerSession" ADD CONSTRAINT "focusTimerSession_focusSession_id_fkey" FOREIGN KEY ("focusSession_id") REFERENCES "focusSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gameStates" ADD CONSTRAINT "gameStates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
