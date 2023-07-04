import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/drawing.controllers.js'
import { verifyToken, isAdmin } from './../middlewares/index.js'

router.get('/drawings', ctrl.getDrawings)
// verifyToken puebla los valores req. y isAdmin puede usarlos
router.post('/drawings', [verifyToken, isAdmin], ctrl.postDrawings)

export default router;