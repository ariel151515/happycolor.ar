import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/subCategories.controllers.js'

router.post('/subcategories', ctrl.postSubCategories)
router.get('/subcategories', ctrl.getSubCategories)
router.get('/subcategories/:id', ctrl.getFiltraLasSubcategoriasDeUnaCategoria)

export default router;