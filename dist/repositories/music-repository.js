"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMusicFavorite = exports.findMusicById = exports.deleteMusic = exports.createMusic = exports.findMusicByCategory = exports.findAllMusic = void 0;
const database_util_1 = require("../utils/database-util");
const findAllMusic = async () => {
    return database_util_1.prismaClient.music.findMany({
        include: {
            musicCategory: true,
        },
    });
};
exports.findAllMusic = findAllMusic;
const findMusicByCategory = async (categoryId) => {
    return database_util_1.prismaClient.music.findMany({
        where: { musicCategory_id: categoryId },
        include: { musicCategory: true },
    });
};
exports.findMusicByCategory = findMusicByCategory;
const createMusic = async (data) => {
    return database_util_1.prismaClient.music.create({
        data,
    });
};
exports.createMusic = createMusic;
const deleteMusic = async (id) => {
    return database_util_1.prismaClient.music.delete({
        where: { id },
    });
};
exports.deleteMusic = deleteMusic;
const findMusicById = async (id) => {
    return database_util_1.prismaClient.music.findUnique({
        where: { id },
    });
};
exports.findMusicById = findMusicById;
// FAVORITE
const addMusicFavorite = async (userId, musicId) => {
    return database_util_1.prismaClient.musicFav.create({
        data: {
            user_id: userId,
            music_id: musicId,
        },
    });
};
exports.addMusicFavorite = addMusicFavorite;
//# sourceMappingURL=music-repository.js.map