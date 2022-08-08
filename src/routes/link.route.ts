import { Router } from 'express';
import getIndex from '../controllers/index.controller';
import { createLink } from '../controllers/link.controller';

const router = Router();

router.route('/').get(getIndex);

router.route('/create').post(createLink); 

router.route('/:url').get();

export default router; 