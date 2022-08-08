import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';
import customErrorHandler from './src/middlewares/error-handler';
import notFoundMiddleware from './src/middlewares/not-found';

import linkRouter from './src/routes/link.route'
import { createClient } from 'redis';

dotenv.config();

const app: Express = express();
const port: any = process.env.PORT;
const redisClient = createClient();

app.use(express.json());

app.use('/', linkRouter);

app.use(notFoundMiddleware);
app.use(customErrorHandler);

app.listen(port, async () => {
  await redisClient.connect();
  console.log(`[*] Server running on port ${port}`);
}); 