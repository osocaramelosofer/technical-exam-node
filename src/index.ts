import { Request, Response } from 'express';
import { createApp } from './config/express';
import { connectToDatabase } from './config/mongodb';
import { userRouter } from './modules/users/route';

const app = createApp();
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDatabase()

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello, TypeScript with Express!!');
    });
    app.use('/api/v1/users',userRouter)
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error)
  }
}

startServer()
