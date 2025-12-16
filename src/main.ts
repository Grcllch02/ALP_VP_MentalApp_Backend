import express from 'express';
import { PORT } from './utils/env-util';

import 'dotenv/config';
import { publicRouter } from "./routes/public-api"
import { errorMiddleware } from './middlewares/error-middleware';
import { privateRouter } from './routes/private-api';
import path from "path";


const app = express();

app.use(express.json())
app.use("/api", publicRouter)
app.use("/api", privateRouter)
app.use(errorMiddleware)

// biar bisa akses musicnya di web
app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"))
);

app.listen(PORT, () => {
    console.log(`Connnected to port ${PORT}`)
})
