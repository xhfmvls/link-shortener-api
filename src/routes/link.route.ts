import { Router } from 'express';
import getIndex from '../controllers/index.controller';

const router = Router();

router.route('/').get(getIndex);

// router.route('/:key').get(async(req: Request, res: Response) => {
//   return res.redirect('https://wikipedia.com');
// })

export default router; 