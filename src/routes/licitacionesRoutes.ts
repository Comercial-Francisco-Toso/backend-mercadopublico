import { Router } from 'express';
import licitacionesController from '../controllers/licitacionesController';

const router = Router();

router.get('/listLicitaciones', licitacionesController.getLicitaciones);
router.get('/listLicitacionesFecha', licitacionesController.getLicitacionesFecha);

export default router;
