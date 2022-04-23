import { Request, Response, NextFunction } from 'express';

interface ErrorBody {
  status: number;
  message: string;
}

const errorHandler = async (
  err: ErrorBody,
  req: Request,
  res: Response,
  _next: NextFunction,
) => (
  res.status(err.status).json({ message: err.message })
);

export default errorHandler;
