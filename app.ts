import express, {Express, Response, Request} from 'express'; 
import dotenv from 'dotenv'; 

dotenv.config(); 

const app: Express = express(); 
const port: any = process.env.PORT; 

app.use(express.json()); 

app.get('/', (req: Request, res: Response): Response => {
  return res.json({
    success: true, 
  }); 
});

app.listen(port, (): void => {
  console.log(`[*] Server running on port ${port}`); 
}); 