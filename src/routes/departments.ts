import { Router } from 'express';
import { departments } from '../controllers/departments';
import { Department } from '../types/departments';

const departmentsRouter = Router();

departmentsRouter.get('/', (req, res) => {
  res.send('Departments endpoint');
});

departmentsRouter.get('/all', (req, res) => {
  res.send(departments.departmentArray);
});

departmentsRouter.get('/name/:name/:limit?', (req, res) => {
  const { name, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Department[] = departments.byName(name, formattedLimit);
  res.send(results);
});

departmentsRouter.get('/department-code/:departmentCode/:limit?', (req, res) => {
  const { departmentCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Department[] = departments.byDepartmentCode(departmentCode, formattedLimit);
  res.send(results);
});

departmentsRouter.get('/region-code/:regionCode/:limit?', (req, res) => {
  const { regionCode, limit } = req.params;
  const formattedLimit = limit ? Number(limit) : undefined;
  const results: Department[] = departments.byRegionCode(regionCode, formattedLimit);
  res.send(results);
});

export default departmentsRouter;
