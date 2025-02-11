import { Router } from 'express';
import licitacionesController from '../controllers/licitacionesController';

const router = Router();

router.get('/listLicitaciones', licitacionesController.getLicitaciones);

export default router;
