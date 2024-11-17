import { Router } from 'express';
import chartController from '../controllers/chart.controller.mjs';

const router = Router();

router.get('/generate', chartController.generateChart);

export default router;