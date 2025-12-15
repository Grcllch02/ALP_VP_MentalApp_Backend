export declare class AuthRepository {
    findAllUsers(): Promise<{
        id: number;
        username: string;
        email: string;
    }[]>;
    findUsersByIds(ids: number[]): Promise<{
        id: number;
        username: string;
        email: string;
    }[]>;
    findUserByEmail(email: string): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
    } | null>;
    findUserByEmailOrUsername(email: string, username: string): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
    } | null>;
    createUser(data: {
        username: string;
        email: string;
        password: string;
    }): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
    }>;
}
//# sourceMappingURL=auth.repository.d.ts.map