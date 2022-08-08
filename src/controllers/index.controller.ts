import { StatusCodes } from 'http-status-codes';
import { JsonResponse } from '../types/types';
import { Response, Request } from 'express';

const getIndex = async (req: Request, res: Response) => {
  let response: JsonResponse = {
    success: true,
    message: 'Request Valid',
  }
  return res
    .status(StatusCodes.OK)
    .json(response);
}

export default getIndex; 