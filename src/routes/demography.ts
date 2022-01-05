import { Router } from 'express';
import { demography } from '../controllers/demography';

const demographyRouter = Router();

demographyRouter.get('/', (req, res) => {
  res.send('Demography endpoint');
});

demographyRouter.get('/insee-code/:inseeCode', async(req, res) => {
  const { inseeCode } = req.params;
  const results = await demography.byInseeCode(inseeCode);
  res.send(results)
});

export default demographyRouter;
