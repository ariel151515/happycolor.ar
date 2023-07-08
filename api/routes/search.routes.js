import { Router } from "express";
const router = Router();

import * as ctrl from '../controllers/search.controllers.js'

router.get('/search/:drawing', ctrl.searchCtrl)


export default router;

