import 'dotenv/config';
import express, { Request, Response } from 'express';
import { AuthService } from './services/auth.service';
import { GameStateService } from './services/gameState.service';

const app = express();
const authService = new AuthService();
const gameStateService = new GameStateService();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Auth endpoints directly
app.post('/auth/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body || {};
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'username, email, and password are required' });
    }
    const result = await authService.register({ username, email, password });
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Registration failed';
    const status = message.includes('already') ? 400 : 500;
    res.status(status).json({ message });
  }
});

app.post('/auth/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: 'email and password are required' });
    }
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Login failed';
    const status = message === 'Invalid email or password' ? 401 : 500;
    res.status(status).json({ message });
  }
});

// Users: list all or by ids query (?ids=1,2,3)
app.get('/users', async (req: Request, res: Response) => {
  try {
    const idsParam = (req.query.ids as string | undefined) || undefined;
    const ids = idsParam ? idsParam.split(',').map((v) => Number(v)).filter((n) => !Number.isNaN(n)) : undefined;
    const users = await authService.getUsers(ids);
    res.json(users);
  } catch {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// GameState endpoints directly
app.get('/game-states', async (_req: Request, res: Response) => {
  try {
    const data = await gameStateService.getAllGameStates();
    res.json(data);
  } catch {
    res.status(500).json({ message: 'Failed to fetch game states' });
  }
});

app.get('/game-states/user/:userId/latest', async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const data = await gameStateService.getLatestGameStateByUserId(userId);
    res.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch game state';
    const status = message.includes('not found') ? 404 : 500;
    res.status(status).json({ message });
  }
});

app.get('/game-states/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await gameStateService.getGameStateById(id);
    res.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch game state';
    const status = message === 'Game state not found' ? 404 : 500;
    res.status(status).json({ message });
  }
});

app.post('/game-states', async (req: Request, res: Response) => {
  try {
    const { user_id, boardState, score, nextBlocks } = req.body || {};
    if (user_id === undefined || !boardState || nextBlocks === undefined) {
      return res.status(400).json({ message: 'user_id, boardState, and nextBlocks are required' });
    }
    const created = await gameStateService.createGameState({ user_id: Number(user_id), boardState, score, nextBlocks });
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create game state' });
  }
});

app.put('/game-states/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { boardState, score, nextBlocks } = req.body || {};
    const updated = await gameStateService.updateGameState(id, { boardState, score, nextBlocks });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update game state' });
  }
});

app.delete('/game-states/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await gameStateService.deleteGameState(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete game state' });
  }
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
