import { Request, Response } from 'express';
export declare class AuthController {
    private service;
    constructor();
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=auth-controller.d.ts.map