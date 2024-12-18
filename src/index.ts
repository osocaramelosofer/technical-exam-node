import { Request, Response } from 'express';
import { createApp } from './config/express';
import { connectToDatabase } from './config/mongodb';
import { userRouter } from './modules/users/route';
import authRouter from './modules/auth/route';

const app = createApp();
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDatabase()

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello!');
    });

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/auth', authRouter)
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error)
  }
}

startServer()
