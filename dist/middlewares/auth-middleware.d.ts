import { Response, NextFunction } from "express";
import { AuthRequest } from "../auth-request";
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth-middleware.d.ts.map