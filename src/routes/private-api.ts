import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
import { MusicController } from "../controllers/music-controller"
import { FocusController } from "../controllers/focus-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

privateRouter.get("/musics/favorites", MusicController.getFavorites);
privateRouter.post("/musics/favorite", MusicController.addFavoriteMusic)

privateRouter.post("/focusTimers", FocusController.createFocusTimer);
privateRouter.get("/focusTimers", FocusController.getMyFocusTimers);