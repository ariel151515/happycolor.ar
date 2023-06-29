import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/drawing.controllers.js'

router.get('/drawings', ctrl.getDrawings)
router.post('/drawings', ctrl.postDrawings)

export default router;