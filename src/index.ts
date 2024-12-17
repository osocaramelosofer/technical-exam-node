import express, { Request, Response } from 'express';
import { createApp } from './config/express';
import { mongoClient } from './config/mongodb';

const app = createApp();
const port = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!!');
});
app.get('/mongo', async (req:Request , res:Response) => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await mongoClient.connect();
        // Send a ping to confirm a successful connection
        await mongoClient.db("admin").command({ ping: 1 });
        res.send('You successfully connected to MongoDB!')
      } finally {
        // Ensures that the client will close when you finish/error
        await mongoClient.close();
      }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
