/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './app/middlewear/globalErrorhandler';
import router from './app/routes';
import notFound from './app/middlewear/notFound';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes

app.use('/api/v1/', router);

// parser

const test = async (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', test);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
