import { Router } from "express";
const router = Router();

import { getUser, postUser } from '../controllers/user.controllers.js'


router.post('/user', postUser)
router.get('/user', getUser)



export default router;