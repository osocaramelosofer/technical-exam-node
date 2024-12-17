import express from 'express';
import cors from 'cors';

export const createApp = () => {
  const app = express();

  app.set('trust proxy', 1);

  // Middleware to handle json and URL encoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors({
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,PUT,POST,DELETE',
    preflightContinue: false,
  }));

  return app;
};
