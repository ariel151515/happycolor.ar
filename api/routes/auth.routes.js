import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/auth.controllers.js'

router.post('/user/signup', ctrl.signUp)
router.post('/user/signin', ctrl.signIn)

export default router;
