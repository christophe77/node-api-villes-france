import { Router } from 'express';
import { regions } from '../controllers/regions';
import { Region } from '../types/regions';

const regionsRouter = Router();

regionsRouter.get('/', function (req, res) {
  res.send('Regions endpoint');
});

regionsRouter.get('/all', function (req, res) {
  res.send(regions.regionArray);
});

regionsRouter.get('/name/:name/:limit?', function (req, res) {
  const { name, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Region[] = regions.byName(name, formattedLimit);
  res.send(results);
});

regionsRouter.get('/region-code/:regionCode/:limit?', function (req, res) {
  const { regionCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Region[] = regions.byCode(regionCode, formattedLimit);
  res.send(results);
});

export default regionsRouter;
