import { Router } from 'express';
import getIndex from '../controllers/index.controller';
import { createLink, getRedirect } from '../controllers/link.controller';

const router = Router();

router.route('/').get(getIndex);

router.route('/create').post(createLink); 

router.route('/l/:url').get(getRedirect);

export default router; 