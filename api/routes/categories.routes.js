import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/categories.controllers.js'
import { verifyToken, isAdmin, verificaCategoriaExistente } from './../middlewares/index.js'

router.post('/categories', [verifyToken, isAdmin, verificaCategoriaExistente], ctrl.postCategories)
router.get('/categories', ctrl.getCategories)

export default router;