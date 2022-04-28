import { Request, Response } from 'express';
import MatchService from '../services/Match';
import MatchBody from '../interfaces/Match';

export default class MatchController {
  static async getMatches(req: Request, res: Response): Promise<Response> {
    if (req.query.inProgress === 'true') {
      const matchesInProgress = await MatchService.getMatchesInProgress();
      return res.status(200).json(matchesInProgress);
    }
    const matches = await MatchService.getMatches();
    return res.status(200).json(matches);
  }

  static async createNewMatch(req: Request, res: Response): Promise<Response> {
    const createdMatch = await MatchService.createNewMatch(req.body as MatchBody);
    return res.status(200).json(createdMatch);
  }
}
