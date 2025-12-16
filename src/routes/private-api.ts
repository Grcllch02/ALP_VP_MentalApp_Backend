import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
import { MusicController } from "../controllers/music-controller"
import { MusicCategoryController } from "../controllers/musicCategory-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)


privateRouter.post("/musics/favorite", MusicController.addFavoriteMusic)