import { Router } from "express";
const router = Router();

import { getDrawings, postDrawings } from '../controllers/drawing.controllers.js'

router.get('/drawings', getDrawings)
router.post('/drawings', postDrawings)


export default router;