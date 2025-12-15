import { Request } from "express";
import { UserJWTPayload } from "./models/user-model";
export interface AuthRequest extends Request {
    user?: UserJWTPayload;
}
//# sourceMappingURL=auth-request.d.ts.map