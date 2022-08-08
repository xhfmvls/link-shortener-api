import { StatusCodes } from 'http-status-codes';
import { JsonResponse } from '../types/types';
import { Response, Request } from 'express';
import Redis, { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config(); 

const redisClient = createClient();
const port = process.env.PORT; 

const createLink = async (req: Request, res: Response) => {
  const originalLink: string = req.body.originalLink;
  const redirectLink: string = `http://localhost:${port}/${req.body.redirectLink}`;

  // redisClient.get(redirectLink);
  await redisClient.connect();
  const value = await redisClient.get(redirectLink);
  if (!value) {
    redisClient.set(redirectLink, originalLink);
    let response: JsonResponse = {
      success: true,
      message: 'URL created',
      data: {
        originalLink: originalLink,
        redirectLink: redirectLink,
      }
    }
    return res.status(StatusCodes.CREATED).json(response);
  }
  let failedResponse: JsonResponse = {
    success: false,
    message: 'URL already exsist',
  }
  return res.status(StatusCodes.BAD_REQUEST).json(failedResponse);
}

export {
  createLink
}