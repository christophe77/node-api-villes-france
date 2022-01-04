import express, { Application, Request, Response } from 'express';
import citiesRouter from './routes/cities';
import departmentsRouter from './routes/departments';
import regionsRouter from './routes/regions';
import demographyRouter from './routes/demography';
import politicRouter from './routes/politic';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cities', citiesRouter);
app.use('/departments', departmentsRouter);
app.use('/regions', regionsRouter);
app.use('/demography', demographyRouter);
app.use('/politic', politicRouter);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Villes de France API',
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  throw new Error('error');
}
