export declare class GameStateRepository {
    findAll(): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    } | null>;
    findLatestByUserId(userId: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    } | null>;
    create(data: {
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
    update(id: number, data: {
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
    delete(id: number): Promise<{
        id: number;
        user_id: number;
        boardState: string;
        score: number;
        nextBlocks: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=gameState.repository.d.ts.map