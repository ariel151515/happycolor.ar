import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/auth.controllers.js'
import { verificarUsuarioExistente } from './../middlewares/index.js'

router.post('/user/signup', verificarUsuarioExistente, ctrl.signUp)
router.post('/user/signin', ctrl.signIn)

export default router;
