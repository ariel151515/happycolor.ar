import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/user.controllers.js'

router.post('/user', ctrl.postUser)
router.get('/user', ctrl.getUser)

export default router;
