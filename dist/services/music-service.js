"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeMusic = exports.pauseMusic = exports.playMusic = exports.addToFavorite = exports.removeMusic = exports.addMusic = exports.getMusicByCategory = exports.getAllMusic = void 0;
const repo = __importStar(require("../repositories/music-repository"));
const getAllMusic = async () => {
    return repo.findAllMusic();
};
exports.getAllMusic = getAllMusic;
const getMusicByCategory = async (categoryId) => {
    return repo.findMusicByCategory(categoryId);
};
exports.getMusicByCategory = getMusicByCategory;
const addMusic = async (data) => {
    if (!data.title || !data.fileUrl || !data.musicCategory_id) {
        throw new Error("Invalid music data");
    }
    return repo.createMusic(data);
};
exports.addMusic = addMusic;
const removeMusic = async (id) => {
    return repo.deleteMusic(id);
};
exports.removeMusic = removeMusic;
// FAVORITE
const addToFavorite = async (userId, musicId) => {
    const music = await repo.findMusicById(musicId);
    if (!music)
        throw new Error("Music not found");
    return repo.addMusicFavorite(userId, musicId);
};
exports.addToFavorite = addToFavorite;
// STATE ONLY
const playMusic = async (id) => {
    const music = await repo.findMusicById(id);
    if (!music)
        throw new Error("Music not found");
    return {
        message: "Music ready to play",
        fileUrl: music.fileUrl,
    };
};
exports.playMusic = playMusic;
const pauseMusic = async () => {
    return { message: "Music paused" };
};
exports.pauseMusic = pauseMusic;
const resumeMusic = async () => {
    return { message: "Music resumed" };
};
exports.resumeMusic = resumeMusic;
//# sourceMappingURL=music-service.js.map