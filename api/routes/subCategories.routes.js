import { Router } from "express";
const router = Router();

import { postSubCategories, getSubCategories } from '../controllers/subCategories.controllers.js'

router.post('/subcategories', postSubCategories)
router.get('/subcategories', getSubCategories)


export default router;