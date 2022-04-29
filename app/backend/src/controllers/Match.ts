import { NextFunction, Request, Response } from 'express';
import MatchService from '../services/Match';
import MatchBody from '../interfaces/Match';

export default class MatchController {
  static async getMatches(_req: Request, res: Response): Promise<Response> {
    const matches = await MatchService.getMatches();
    return res.status(200).json(matches);
  }

  static async getMatchesByInProgress(req: Request, res: Response): Promise<Response> {
    const isInProgressTrue = req.query.inProgress === 'true';
    const matchesInProgress = await MatchService.getMatchesByInProgress(isInProgressTrue);
    return res.status(200).json(matchesInProgress);
  }

  static async createNewMatch(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const newMatch = req.body as MatchBody;
    if (newMatch.awayTeam === newMatch.homeTeam) {
      return next({ status: 400,
        message: 'It is not possible to create a match with two equal teams' });
    }
    const createdMatch = await MatchService.createNewMatch(newMatch);
    return res.status(200).json(createdMatch);
  }

  static async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await MatchService.finishMatch(id);
    return res.status(200).json('Game Over!');
  }
}
