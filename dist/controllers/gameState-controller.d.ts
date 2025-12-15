import { Request, Response } from 'express';
export declare class GameStateController {
    private service;
    constructor();
    getAllGameStates: (_req: Request, res: Response) => Promise<void>;
    getGameStateById: (req: Request, res: Response) => Promise<void>;
    getLatestGameStateByUserId: (req: Request, res: Response) => Promise<void>;
    createGameState: (req: Request, res: Response) => Promise<void>;
    updateGameState: (req: Request, res: Response) => Promise<void>;
    deleteGameState: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=gameState-controller.d.ts.map