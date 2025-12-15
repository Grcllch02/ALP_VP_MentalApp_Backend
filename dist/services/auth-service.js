"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_repository_1 = require("../repositories/auth.repository");
const jwt_util_1 = require("../utils/jwt-util");
class AuthService {
    constructor() {
        this.repository = new auth_repository_1.AuthRepository();
    }
    async register(data) {
        const existingUser = await this.repository.findUserByEmailOrUsername(data.email, data.username);
        if (existingUser) {
            const field = existingUser.email === data.email ? 'Email' : 'Username';
            throw new Error(`${field} already ${field === 'Email' ? 'registered' : 'taken'}`);
        }
        const user = await this.repository.createUser(data);
        const { password: _, ...userWithoutPassword } = user;
        const token = (0, jwt_util_1.generatedToken)({
            id: user.id,
            username: user.username,
            email: user.email
        });
        return {
            user: userWithoutPassword,
            token
        };
    }
    async login(email, password) {
        const user = await this.repository.findUserByEmail(email);
        if (!user || user.password !== password) {
            throw new Error('Invalid email or password');
        }
        const token = (0, jwt_util_1.generatedToken)({
            id: user.id,
            username: user.username,
            email: user.email
        });
        const { password: _, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            token
        };
    }
    async getUsers(ids) {
        if (ids && ids.length > 0) {
            return await this.repository.findUsersByIds(ids);
        }
        return await this.repository.findAllUsers();
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map