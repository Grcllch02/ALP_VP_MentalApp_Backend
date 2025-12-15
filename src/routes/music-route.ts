import { Router } from "express";
import {
    getAllMusic,
    getMusicByCategory,
    addMusic,
    deleteMusic,
    playMusic,
    pauseMusic,
    resumeMusic,
    addFavorite,
} from "../controllers/music-controller";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

// MUSIC
router.get("/", getAllMusic);
router.get("/category/:categoryId", getMusicByCategory);
router.post("/", addMusic);
router.delete("/:id", deleteMusic);

// FAVORITE
router.post("/favorite/:musicId", authMiddleware, addFavorite);

// STATE
router.post("/play/:id", playMusic);
router.post("/pause", pauseMusic);
router.post("/resume", resumeMusic);

export default router;
