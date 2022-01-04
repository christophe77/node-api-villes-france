import express, { Application, Request, Response } from 'express';
import serverless from 'serverless-http';
import citiesRouter from './routes/cities';
import departmentsRouter from './routes/departments';
import regionsRouter from './routes/regions';
import demographyRouter from './routes/demography';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cities', citiesRouter);
app.use('/departments', departmentsRouter);
app.use('/regions', regionsRouter);
app.use('/demography', demographyRouter);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send('Villes de France API');
});

export default app;
export const handler = serverless(app);
