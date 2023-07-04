import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/categories.controllers.js'
import { verifyToken } from './../middlewares/index.js'

router.post('/categories', verifyToken, ctrl.postCategories)
router.get('/categories', ctrl.getCategories)

export default router;