import 'dotenv/config';
import express, { Request, Response } from 'express';
import { PORT } from "./utils/env-util"
import routes from './routes';

const app = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use('/', routes);

// const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
