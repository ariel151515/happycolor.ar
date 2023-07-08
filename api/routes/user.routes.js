import { Router } from "express";
const router = Router();

import { getUser, helloUser, getUsuariosRegistrados } from '../controllers/user.controllers.js'
import { verifyToken } from './../middlewares/index.js'


// Trae cantidad de usuarios registrados en num
router.get('/user/registered', getUsuariosRegistrados)

router.get('/user/:id', getUser)

router.get('/user/helloUser/:id', [verifyToken], helloUser)

export default router;