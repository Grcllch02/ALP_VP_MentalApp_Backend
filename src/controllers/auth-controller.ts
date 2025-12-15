import { Request, Response } from 'express';
import { AuthService } from '../services/auth-service';

export class AuthController {
  private service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  register = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body || {};
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'username, email, and password are required' });
      }
      const result = await this.service.register({ username, email, password });
      res.status(201).json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      const status = message.includes('already') ? 400 : 500;
      console.error('Registration error:', error);
      res.status(status).json({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
      }
      const result = await this.service.login(email, password);
      res.json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      const status = message === 'Invalid email or password' ? 401 : 500;
      console.error('Login error:', error);
      res.status(status).json({ message });
    }
  };
}
