import express, {Express, Response, Request} from 'express'; 
import dotenv from 'dotenv'; 
import customErrorHandler from './src/middlewares/error-handler';
import notFoundMiddleware from './src/middlewares/not-found';

dotenv.config(); 

const app: Express = express(); 
const port: any = process.env.PORT; 

app.use(express.json()); 

app.get('/', (req: Request, res: Response): Response => {
  return res.json({
    success: true, 
  }); 
});

app.use(notFoundMiddleware)
app.use(customErrorHandler); 

app.listen(port, (): void => {
  console.log(`[*] Server running on port ${port}`); 
}); 