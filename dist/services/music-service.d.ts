import { CreateMusicDTO } from "../models/music-model";
export declare const getAllMusic: () => Promise<({
    musicCategory: {
        id: number;
        name: string;
    };
} & {
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
})[]>;
export declare const getMusicByCategory: (categoryId: number) => Promise<({
    musicCategory: {
        id: number;
        name: string;
    };
} & {
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
})[]>;
export declare const addMusic: (data: CreateMusicDTO) => Promise<{
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
}>;
export declare const removeMusic: (id: number) => Promise<{
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
}>;
export declare const addToFavorite: (userId: number, musicId: number) => Promise<{
    id: number;
    user_id: number;
    music_id: number;
}>;
export declare const playMusic: (id: number) => Promise<{
    message: string;
    fileUrl: string;
}>;
export declare const pauseMusic: () => Promise<{
    message: string;
}>;
export declare const resumeMusic: () => Promise<{
    message: string;
}>;
//# sourceMappingURL=music-service.d.ts.map