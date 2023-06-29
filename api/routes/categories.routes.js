import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/categories.controllers.js'

router.post('/categories', ctrl.postCategories)
router.get('/categories', ctrl.getCategories)

export default router;