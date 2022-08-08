import express  from "express";
import dotenv from "dotenv";
dotenv.config(); 

const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    status: 'OK',
  });
});

app.listen(port, () => {
  console.log(`[*] Server Listening on Port ${port}`); 
});