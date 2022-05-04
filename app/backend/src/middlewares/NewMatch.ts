import { NextFunction, Request, Response } from 'express';
import MatchBody from '../interfaces/Match';

const isTheSameTeam = async (req: Request, _res: Response, next: NextFunction) => {
  const newMatch = req.body as MatchBody;
  if (newMatch.awayTeam === newMatch.homeTeam) {
    return next({ status: 401,
      message: 'It is not possible to create a match with two equal teams' });
  }
  return next();
};

export default isTheSameTeam;
