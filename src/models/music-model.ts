export interface CreateMusicDTO {
    title: string
    fileUrl: string
    duration: number
    musicCategory_id: number
}

export interface MusicStateResponse {
    message: string
    fileUrl?: string
}