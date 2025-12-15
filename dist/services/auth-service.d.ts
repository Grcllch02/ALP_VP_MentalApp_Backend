export declare class AuthService {
    private repository;
    constructor();
    register(data: {
        username: string;
        email: string;
        password: string;
    }): Promise<{
        user: {
            id: number;
            username: string;
            email: string;
        };
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: number;
            username: string;
            email: string;
        };
        token: string;
    }>;
    getUsers(ids?: number[]): Promise<{
        id: number;
        username: string;
        email: string;
    }[]>;
}
//# sourceMappingURL=auth-service.d.ts.map