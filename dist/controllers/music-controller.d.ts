import { Request, Response } from "express";
import { AuthRequest } from "../auth-request";
export declare const getAllMusic: (req: Request, res: Response) => Promise<void>;
export declare const getMusicByCategory: (req: Request, res: Response) => Promise<void>;
export declare const addMusic: (req: Request, res: Response) => Promise<void>;
export declare const deleteMusic: (req: Request, res: Response) => Promise<void>;
export declare const addFavorite: (req: AuthRequest, res: Response) => Promise<void>;
export declare const playMusic: (req: Request, res: Response) => Promise<void>;
export declare const pauseMusic: (req: Request, res: Response) => Promise<void>;
export declare const resumeMusic: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=music-controller.d.ts.map