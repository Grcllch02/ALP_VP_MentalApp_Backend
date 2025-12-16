import express from "express"
import { UserController } from "../controllers/user-controller"
import { MusicCategoryController } from "../controllers/musicCategory-controller"
import { MusicController } from "../controllers/music-controller"

export const publicRouter = express.Router()

publicRouter.post("/register", UserController.register)
publicRouter.post("/login", UserController.login)

publicRouter.post("/musicCategories", MusicCategoryController.create)
publicRouter.get("/musicCategories", MusicCategoryController.getAll)

publicRouter.post("/musics", MusicController.createMusic)
publicRouter.get("/musics", MusicController.getAllMusic)
publicRouter.get("/musics/category/:categoryId", MusicController.getByCategory);