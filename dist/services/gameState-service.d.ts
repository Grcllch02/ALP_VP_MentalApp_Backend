export declare class GameStateService {
    private repository;
    constructor();
    getAllGameStates(): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }[]>;
    getGameStateById(id: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    getLatestGameStateByUserId(userId: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    createGameState(data: {
        user_id: number;
        boardState: string;
        score?: number;
        nextBlocks: string;
    }): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    updateGameState(id: number, data: {
        boardState?: string;
        score?: number;
        nextBlocks?: string;
    }): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    deleteGameState(id: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=gameState-service.d.ts.map