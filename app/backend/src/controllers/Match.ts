import { Request, Response } from 'express';
import MatchService from '../services/Match';

export default class MatchController {
  static async getMatches(req: Request, res: Response): Promise<Response> {
    if (req.query.inProgress === 'true') {
      const matchesInProgress = await MatchService.getMatchesInProgress();
      return res.status(200).json(matchesInProgress);
    }
    const matches = await MatchService.getMatches();
    return res.status(200).json(matches);
  }
}
