import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import citiesRouter from './routes/cities';
import departmentsRouter from './routes/departments';
import regionsRouter from './routes/regions';
import demographyRouter from './routes/demography';
import politicRouter from './routes/politic';
import imagesRouter from './routes/images';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/docs', swaggerUi.serve);

app.use('/cities', citiesRouter);
app.use('/departments', departmentsRouter);
app.use('/regions', regionsRouter);
app.use('/demography', demographyRouter);
app.use('/politic', politicRouter);
app.use('/images', imagesRouter);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Villes de France API',
  });
});
app.get('/docs', swaggerUi.setup(swaggerDocument));

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  throw new Error('error');
}
