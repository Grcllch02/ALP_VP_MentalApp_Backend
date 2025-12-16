export interface CreateMusicRequest {
    title: string
    fileUrl: string
    duration: number
    categoryId: number
}

export interface MusicResponse {
    id: number
    title: string
    fileUrl: string
    duration: number
    category: string
}

export interface AddFavoriteMusicRequest {
    musicId: number
}