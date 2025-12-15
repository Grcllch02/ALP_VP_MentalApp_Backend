import 'dotenv/config';
import express, { Request, Response } from 'express';
import routes from './routes';
import { PORT as ENV_PORT } from './utils/env-util';


const app = express();
const PORT = ENV_PORT ? Number(ENV_PORT) : 3000;

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});


app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
