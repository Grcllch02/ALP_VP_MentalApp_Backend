import * as repo from "../repositories/music-repository"
import { CreateMusicDTO } from "../models/music-model"

export const getAllMusic = async () => {
    return repo.findAllMusic()
}

export const getMusicByCategory = async (categoryId: number) => {
    return repo.findMusicByCategory(categoryId)
}

export const addMusic = async (data: CreateMusicDTO) => {
    if (!data.title || !data.fileUrl || !data.musicCategory_id) {
        throw new Error("Invalid music data")
    }

    return repo.createMusic(data)
}

export const removeMusic = async (id: number) => {
    return repo.deleteMusic(id)
}

// FAVORITE
export const addToFavorite = async (userId: number, musicId: number) => {
    const music = await repo.findMusicById(musicId)
    if (!music) throw new Error("Music not found")

    return repo.addMusicFavorite(userId, musicId)
}

// STATE ONLY
export const playMusic = async (id: number) => {
    const music = await repo.findMusicById(id)
    if (!music) throw new Error("Music not found")

    return {
        message: "Music ready to play",
        fileUrl: music.fileUrl,
    }
}

export const pauseMusic = async () => {
    return { message: "Music paused" }
}

export const resumeMusic = async () => {
    return { message: "Music resumed" }
}
