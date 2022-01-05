import { Router } from 'express';
import { politic } from '../controllers/politic';

const politicRouter = Router();

politicRouter.get('/region/:regionName', (req, res) => {
  const { regionName } = req.params;
  politic.byRegion(regionName, res);
});

politicRouter.get('/city/:cityName', (req, res) => {
  const { cityName } = req.params;
  politic.byCity(cityName, res);
});

politicRouter.get('/department/:departmentName', (req, res) => {
  const { departmentName } = req.params;
  politic.byDepartment(departmentName, res);
});

export default politicRouter;
