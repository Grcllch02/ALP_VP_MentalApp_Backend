import 'dotenv/config';
import express, { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// GameState CRUD
app.get('/game-states', async (_req: Request, res: Response) => {
  const data = await prisma.gameState.findMany();
  res.json(data);
});

// Get latest game state for a user
app.get('/game-states/user/:userId/latest', async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const data = await prisma.gameState.findFirst({
    where: { user_id: userId },
    orderBy: { updatedAt: 'desc' }
  });
  if (!data) return res.status(404).json({ message: 'No saved game found' });
  res.json(data);
});

app.get('/game-states/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await prisma.gameState.findUnique({ where: { id } });
  if (!data) return res.status(404).json({ message: 'Not found' });
  res.json(data);
});

app.post('/game-states', async (req: Request, res: Response) => {
  const { user_id, boardState, score, nextBlocks } = req.body;
  const created = await prisma.gameState.create({
    data: { user_id, boardState, score: score ?? 0, nextBlocks },
  });
  res.status(201).json(created);
});

app.put('/game-states/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { boardState, score, nextBlocks } = req.body;
  const updated = await prisma.gameState.update({
    where: { id },
    data: { boardState, score, nextBlocks },
  });
  res.json(updated);
});

app.delete('/game-states/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.gameState.delete({ where: { id } });
  res.status(204).send();
});

// Auth endpoints
app.post('/auth/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email ? 'Email already registered' : 'Username already taken' 
      });
    }

    // Create user (TODO: hash password in production!)
    const user = await prisma.user.create({
      data: { username, email, password }
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(201).json({
      user: userWithoutPassword,
      token: `mock-token-${user.id}` // TODO: Generate real JWT token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

app.post('/auth/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
      user: userWithoutPassword,
      token: `mock-token-${user.id}` // TODO: Generate real JWT token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
