import { Response, NextFunction, Request } from "express"
import { MusicService } from "../services/music-service"
import { UserRequest } from "../models/user-request"
import { CreateMusicRequest } from "../models/music-model"

export class MusicController {

  static async createMusic(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const request: CreateMusicRequest = req.body
      const response = await MusicService.createMusic(request)

      res.status(201).json({
        data: response
      })
    } catch (error) {
      next(error)
    }
  }

  static async getAllMusic(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await MusicService.getAllMusic()
      res.status(200).json({
        data: result
      })
    } catch (error) {
      next(error)
    }
  }

  static async getByCategory(
    req: Request<{ categoryId: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const categoryId = Number(req.params.categoryId);

      const musics = await MusicService.getByCategory(categoryId);

      res.status(200).json({
        data: musics,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getFavorites(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.user!.id;

      const favorites = await MusicService.getFavorites(userId);

      res.status(200).json({
        data: favorites,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addFavoriteMusic(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {   
      const userId = req.user!.id
      const musicId = Number(req.body.musicId)

      await MusicService.addFavoriteMusic(userId, musicId)

      res.status(200).json({
        message: "Music added to favorite"
      })
    } catch (error) {
      next(error)
    }
  }
}
