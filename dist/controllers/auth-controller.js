"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth-service");
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            try {
                const { username, email, password } = req.body || {};
                if (!username || !email || !password) {
                    return res.status(400).json({ message: 'username, email, and password are required' });
                }
                const result = await this.service.register({ username, email, password });
                res.status(201).json(result);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : 'Registration failed';
                const status = message.includes('already') ? 400 : 500;
                console.error('Registration error:', error);
                res.status(status).json({ message });
            }
        };
        this.login = async (req, res) => {
            try {
                const { email, password } = req.body || {};
                if (!email || !password) {
                    return res.status(400).json({ message: 'email and password are required' });
                }
                const result = await this.service.login(email, password);
                res.json(result);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : 'Login failed';
                const status = message === 'Invalid email or password' ? 401 : 500;
                console.error('Login error:', error);
                res.status(status).json({ message });
            }
        };
        this.service = new auth_service_1.AuthService();
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.js.map