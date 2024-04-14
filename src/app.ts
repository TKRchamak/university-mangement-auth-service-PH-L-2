import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './app/modules/users/users.router';

const app: Application = express();

app.use(cors());

// parser from body or urlencoded
app.use(express.json());
app.use(express.urlencoded());

//Application Routers
app.use('/api/v1/users/', usersRouter);

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('server running');
});

export default app;
