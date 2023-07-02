import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/auth.controllers.js'

router.post('/user', ctrl.signUp)
//router.get('/user', ctrl.getUser)

export default router;
