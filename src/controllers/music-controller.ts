import { Request, Response } from "express"
import * as musicService from "../services/music-service"
import { AuthRequest } from "../auth-request"

export const getAllMusic = async (req: Request, res: Response) => {
  const music = await musicService.getAllMusic()
  res.json(music)
}

export const getMusicByCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.categoryId)
  const music = await musicService.getMusicByCategory(categoryId)
  res.json(music)
}

export const addMusic = async (req: Request, res: Response) => {
  const music = await musicService.addMusic(req.body)
  res.status(201).json(music)
}

export const deleteMusic = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  await musicService.removeMusic(id)
  res.json({ message: "Music deleted" })
}

// FAVORITE
export const addFavorite = async (req: AuthRequest, res: Response) => {
  const musicId = Number(req.params.musicId)
  const userId = req.user!.id

  const fav = await musicService.addToFavorite(userId, musicId)
  res.status(201).json(fav)
}

// STATE
export const playMusic = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await musicService.playMusic(id)
  res.json(result)
}

export const pauseMusic = async (req: Request, res: Response) => {
  res.json(await musicService.pauseMusic())
}

export const resumeMusic = async (req: Request, res: Response) => {
  res.json(await musicService.resumeMusic())
}
