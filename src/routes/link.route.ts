import express, { Response, Request, Router } from 'express';
import {JsonResponse} from '../types/types'
import {StatusCodes} from 'http-status-codes'; 

const router = Router();

router.route('/').get((req: Request, res: Response): Response => {
  let response: JsonResponse = {
    success: true,
    message: 'Request Valid',
  }
  return res
    .status(StatusCodes.OK)
    .json(response); 
})

// router.route('/:key').get(async(req: Request, res: Response) => {
//   return res.redirect('https://wikipedia.com');
// })

export default router; 