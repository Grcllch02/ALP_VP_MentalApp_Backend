import { UserJWTPayload } from '../models/user-model';
export declare const generatedToken: (payload: UserJWTPayload, expirytime?: string) => string;
export declare const verifyToken: (token: string) => UserJWTPayload;
//# sourceMappingURL=jwt-util.d.ts.map