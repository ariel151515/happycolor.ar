import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/subCategories.controllers.js'
import { verifyToken, isAdmin, verificaCategoriaExistente } from './../middlewares/index.js'

router.post('/subcategories', [verifyToken, isAdmin, verificaCategoriaExistente], ctrl.postSubCategories)

router.get('/subcategories', ctrl.getSubCategories)
router.get('/subcategories/:id', ctrl.getFiltraLasSubcategoriasDeUnaCategoria)

export default router;