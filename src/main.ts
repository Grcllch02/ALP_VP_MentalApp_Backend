import 'dotenv/config';
import express from 'express';
import routes from './routes';
import { PORT } from './utils/env-util';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});

app.use(routes);

app.listen(PORT ?? 3000, () => {
    console.log(`Server running on http://localhost:${PORT ?? 3000}`);
});
