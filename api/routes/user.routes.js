import { Router } from "express";
const router = Router();

import { getUser } from '../controllers/user.controllers.js'
// import { verifyToken } from './../middlewares/index.js'

router.get('/user/:id', getUser)


export default router;