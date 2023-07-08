import { Router } from "express";
const router = Router();

import { helloUser } from '../libs/initialSetap.js'
import { verifyToken } from '../middlewares/index.js'


router.get('/helloUser/:id', [verifyToken, helloUser], helloUser)

export default router;
