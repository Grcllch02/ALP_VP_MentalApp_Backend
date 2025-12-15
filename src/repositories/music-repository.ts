import { prismaClient } from "../utils/database-util"
import { CreateMusicDTO } from "../models/music-model"

export const findAllMusic = async () => {
    return prismaClient.music.findMany({
        include: {
        musicCategory: true,
        },
    })
    }

export const findMusicByCategory = async (categoryId: number) => {
    return prismaClient.music.findMany({
        where: { musicCategory_id: categoryId },
        include: { musicCategory: true },
    })
}

export const createMusic = async (data: CreateMusicDTO) => {
    return prismaClient.music.create({
        data,
    })
}

export const deleteMusic = async (id: number) => {
    return prismaClient.music.delete({
        where: { id },
    })
}

export const findMusicById = async (id: number) => {
    return prismaClient.music.findUnique({
        where: { id },
    })
}

// FAVORITE
export const addMusicFavorite = async (userId: number, musicId: number) => {
    return prismaClient.musicFav.create({
        data: {
            user_id: userId,
            music_id: musicId,
        },
    })
}
