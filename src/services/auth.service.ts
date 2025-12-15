import { AuthRepository } from '../repositories/auth.repository';

export class AuthService {
  private repository: AuthRepository;

  constructor() {
    this.repository = new AuthRepository();
  }

  async register(data: { username: string; email: string; password: string }) {
    const existingUser = await this.repository.findUserByEmailOrUsername(data.email, data.username);
    
    if (existingUser) {
      const field = existingUser.email === data.email ? 'Email' : 'Username';
      throw new Error(`${field} already ${field === 'Email' ? 'registered' : 'taken'}`);
    }

    const user = await this.repository.createUser(data);

    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token: `mock-token-${user.id}`
    };
  }

  async login(email: string, password: string) {
    const user = await this.repository.findUserByEmail(email);

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token: `mock-token-${user.id}`
    };
  }

  async getUsers(ids?: number[]) {
    if (ids && ids.length > 0) {
      return await this.repository.findUsersByIds(ids);
    }
    return await this.repository.findAllUsers();
  }
}
