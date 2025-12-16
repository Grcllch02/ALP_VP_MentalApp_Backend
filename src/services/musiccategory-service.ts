import { prismaClient } from "../utils/database-util"
import { ResponseError } from "../error/response-error"
import {
    CreateMusicCategoryRequest,
    MusicCategoryResponse
} from "../models/musicCategory-model"

export class MusicCategoryService {

    static async create(
        request: CreateMusicCategoryRequest
    ): Promise<MusicCategoryResponse> {

        if (!request.name || request.name.trim() === "") {
        throw new ResponseError(400, "Category name is required")
        }

        const exists = await prismaClient.musicCategory.findFirst({
        where: { name: request.name }
        })

        if (exists) {
            new ResponseError(400, "Category already exists")
        }

        const category = await prismaClient.musicCategory.create({
        data: { name: request.name }
        })

        return {
            id: category.id,
        name: category.name
        }
    }

    static async getAll(): Promise<MusicCategoryResponse[]> {
        const categories = await prismaClient.musicCategory.findMany()

        return categories.map(cat => ({
            id: cat.id,
            name: cat.name
        }))
    }
}
