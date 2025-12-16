import { prismaClient } from "../utils/database-util";
import { ResponseError } from "../error/response-error";
import { CreateMusicRequest, MusicResponse } from "../models/music-model";

export class MusicService {

    static async createMusic(
        request: CreateMusicRequest
    ): Promise<MusicResponse> {

        const category = await prismaClient.musicCategory.findUnique({
            where: { id: request.categoryId }
        })

        if (!category) {
            throw new ResponseError(404, "Music category not found")
        }

        const music = await prismaClient.music.create({
            data: {
                title: request.title,
                fileUrl: request.fileUrl,
                duration: request.duration,
                musicCategory_id: request.categoryId
            },
            include: {
                musicCategory: true
            }
        })

        return {
            id: music.id,
            title: music.title,
            fileUrl: music.fileUrl,
            duration: music.duration,
            category: music.musicCategory.name
        }
    }

    static async getAllMusic(): Promise<MusicResponse[]> {
        const musics = await prismaClient.music.findMany({
        include: {
            musicCategory: true,
        },
        });

        return musics.map((music) => ({
            id: music.id,
            title: music.title,
            fileUrl: music.fileUrl,
            duration: music.duration,
        category: music.musicCategory.name,
        }));
    }

    static async addFavoriteMusic(
        userId: number,
        musicId: number
    ): Promise<void> {
        const music = await prismaClient.music.findUnique({
        where: { id: musicId },
        });

        if (!music) {
            throw new ResponseError(404, "Music not found");
        }

        const isAlreadyFavorite = await prismaClient.musicFav.findFirst({
            where: {
                user_id: userId,
                music_id: musicId,
            },
        });

        if (isAlreadyFavorite) {
            throw new ResponseError(400, "Music already added to favorites");
        }

        await prismaClient.musicFav.create({
            data: {
                user_id: userId,
                music_id: musicId,
            },
        });
    }

    static async getByCategory(categoryId: number) {
        return prismaClient.music.findMany({
            where: {
                musicCategory_id: categoryId,
            },
            include: {
                musicCategory: true,
            },
        });
    }
}
