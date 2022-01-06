import { Router } from 'express';
import { religion } from '../controllers/religion';

const religionRouter = Router();
religionRouter.get('/coordinates/:lat/:lon/:around', (req, res) => {
  const { lat, lon, around } = req.params;
  religion.byCoordinates(lat, lon, Number(around), res);
});

export default religionRouter;
