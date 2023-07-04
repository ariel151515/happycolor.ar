import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/favoritos.controllers.js'
import { verifyToken } from './../middlewares/index.js'

router.post('/favoritos', verifyToken, ctrl.postFavoritos)
// router.get('/favoritos', ctrl.getFavoritos)
router.get('/favoritos/:id', verifyToken, ctrl.getFiltraLosFavoritosDeUnUsuario)

export default router;


