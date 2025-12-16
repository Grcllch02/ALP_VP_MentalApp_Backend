import { Response, NextFunction } from "express"
import { UserRequest } from "../models/user-request"
import { MusicCategoryService } from "../services/musiccategory-service"

export class MusicCategoryController {

    static async create(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await MusicCategoryService.create(req.body)
            res.status(201).json({ data: response })
        } catch (error) {
            (error)
        }
    }

    static async getAll(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await MusicCategoryService.getAll()
            res.status(200).json({ data: response })
        } catch (error) {
            next(error)
        }
    }
}
