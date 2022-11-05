import { Router } from 'express';
import { request, response } from 'express';

import pageInitController from '../controllers/index.js';
const router = new Router();

router.get('/', pageInitController);

export default router;