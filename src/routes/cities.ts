import { Router } from 'express';
import { cities } from '../controllers/cities';

const citiesRouter = Router();

citiesRouter.get('/', (req, res) => {
  res.send('Cities endpoint');
});

citiesRouter.get('/name/:name/:limit?', (req, res) => {
  const { name, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results = cities.byName(name, formattedLimit);
  res.send(results);
});
citiesRouter.get('/first-letter/:firstLetter/:limit?', (req, res) => {
  const { firstLetter, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results = cities.byFirstLetter(firstLetter, formattedLimit);
  res.send(results);
});
citiesRouter.get('/department-code/:departmentCode/:limit?', (req, res) => {
  const { departmentCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results = cities.byDepartmentCode(departmentCode, formattedLimit);
  res.send(results);
});

citiesRouter.get('/zip-code/:zipCode/:limit?', (req, res) => {
  const { zipCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results = cities.byZipCode(zipCode, formattedLimit);
  res.send(results);
});

citiesRouter.get('/insee-code/:inseeCode/:limit?', (req, res) => {
  const { inseeCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results = cities.byInseeCode(inseeCode, formattedLimit);
  res.send(results);
});

export default citiesRouter;
