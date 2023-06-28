import { Router } from "express";
const router = Router();

import { postCategories, getCategories } from '../controllers/categories.controllers.js'


router.post('/categories', postCategories)
router.get('/categories', getCategories)


export default router;