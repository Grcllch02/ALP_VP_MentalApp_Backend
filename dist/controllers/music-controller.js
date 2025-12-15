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
exports.resumeMusic = exports.pauseMusic = exports.playMusic = exports.addFavorite = exports.deleteMusic = exports.addMusic = exports.getMusicByCategory = exports.getAllMusic = void 0;
const musicService = __importStar(require("../services/music-service"));
const getAllMusic = async (req, res) => {
    const music = await musicService.getAllMusic();
    res.json(music);
};
exports.getAllMusic = getAllMusic;
const getMusicByCategory = async (req, res) => {
    const categoryId = Number(req.params.categoryId);
    const music = await musicService.getMusicByCategory(categoryId);
    res.json(music);
};
exports.getMusicByCategory = getMusicByCategory;
const addMusic = async (req, res) => {
    const music = await musicService.addMusic(req.body);
    res.status(201).json(music);
};
exports.addMusic = addMusic;
const deleteMusic = async (req, res) => {
    const id = Number(req.params.id);
    await musicService.removeMusic(id);
    res.json({ message: "Music deleted" });
};
exports.deleteMusic = deleteMusic;
// FAVORITE
const addFavorite = async (req, res) => {
    const musicId = Number(req.params.musicId);
    const userId = req.user.id;
    const fav = await musicService.addToFavorite(userId, musicId);
    res.status(201).json(fav);
};
exports.addFavorite = addFavorite;
// STATE
const playMusic = async (req, res) => {
    const id = Number(req.params.id);
    const result = await musicService.playMusic(id);
    res.json(result);
};
exports.playMusic = playMusic;
const pauseMusic = async (req, res) => {
    res.json(await musicService.pauseMusic());
};
exports.pauseMusic = pauseMusic;
const resumeMusic = async (req, res) => {
    res.json(await musicService.resumeMusic());
};
exports.resumeMusic = resumeMusic;
//# sourceMappingURL=music-controller.js.map