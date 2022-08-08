import { StatusCodes } from 'http-status-codes';
import { JsonResponse } from '../types/types';
import { Response, Request } from 'express';
import Redis, { createClient } from 'redis';
import dotenv from 'dotenv';
import { BadRequestError, NotFoundError } from '../errors';
dotenv.config();

const redisClient = createClient();
const port = process.env.PORT;

const createLink = async (req: Request, res: Response) => {
  const originalLink: string = req.body.originalLink;
  const redirectLink: string = `http://localhost:${port}/${req.body.redirectLink}`;
  const key: string = req.body.redirectLink;

  try {
    await redisClient.connect();
  }
  catch (error) {

  }
  const value = await redisClient.get(key);
  if (!value) {
    redisClient.set(key, originalLink);
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
  throw new BadRequestError('URL Exsist');
}

const getRedirect = async (req: Request, res: Response) => {
  const key: string = req.params.url;
  try {
    await redisClient.connect();
  }
  catch (error) {

  }
  const link: string | null = await redisClient.get(key);
  if (link) {
    return res.status(StatusCodes.OK).redirect(link);
  }
  throw new NotFoundError('URL not exsists');
}

export {
  createLink,
  getRedirect,
}