import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/favoritos.controllers.js';

router.post('/favoritos', ctrl.postFavoritos)
router.get('/favoritos', ctrl.getFavoritos)


export default router;


