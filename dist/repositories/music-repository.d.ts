import { CreateMusicDTO } from "../models/music-model";
export declare const findAllMusic: () => Promise<({
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
export declare const findMusicByCategory: (categoryId: number) => Promise<({
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
export declare const createMusic: (data: CreateMusicDTO) => Promise<{
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
}>;
export declare const deleteMusic: (id: number) => Promise<{
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
}>;
export declare const findMusicById: (id: number) => Promise<{
    id: number;
    title: string;
    fileUrl: string;
    duration: number;
    musicCategory_id: number;
} | null>;
export declare const addMusicFavorite: (userId: number, musicId: number) => Promise<{
    id: number;
    user_id: number;
    music_id: number;
}>;
//# sourceMappingURL=music-repository.d.ts.map