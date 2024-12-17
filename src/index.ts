import express, { Request, Response } from 'express';
import { createApp } from './config/express';

const app = createApp();
const port = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
