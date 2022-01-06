import { Router } from 'express';
import { images } from '../controllers/images';

const imagesRouter = Router();

imagesRouter.get('/name/:name/:limit?', async (req, res) => {
  const { name, limit } = req.params;
  const results = await images.byName(name, Number(limit));
  res.send(results);
});

export default imagesRouter;
