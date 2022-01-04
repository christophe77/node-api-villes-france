import { Router } from 'express';
import { regions } from '../controllers/regions';
import { Region } from '../types/regions';

const regionsRouter = Router();

regionsRouter.get('/', (req, res) => {
  res.send('Regions endpoint');
});

regionsRouter.get('/all', (req, res) => {
  res.send(regions.regionArray);
});

regionsRouter.get('/name/:name/:limit?', (req, res) => {
  const { name, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Region[] = regions.byName(name, formattedLimit);
  res.send(results);
});

regionsRouter.get('/region-code/:regionCode/:limit?', (req, res) => {
  const { regionCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Region[] = regions.byCode(regionCode, formattedLimit);
  res.send(results);
});

export default regionsRouter;
