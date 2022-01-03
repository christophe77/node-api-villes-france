import { Router } from 'express';
import { demography } from '../controllers/demography';
import { Demography } from '../types/demography';

const demographyRouter = Router();

demographyRouter.get('/', function (req, res) {
  res.send('Demography endpoint');
});

demographyRouter.get('/insee-code/:inseeCode', function (req, res) {
  const { inseeCode } = req.params;
  demography.byInseeCode(inseeCode).then((results: Demography) => {
    res.send(results);
  });
});

export default demographyRouter;
