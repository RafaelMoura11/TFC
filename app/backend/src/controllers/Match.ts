import { Request, Response } from 'express';
import MatchService from '../services/Match';

export default class MatchController {
  static async getMatches(_req: Request, res: Response): Promise<Response> {
    const matches = await MatchService.getMatches();
    return res.status(200).json(matches);
  }
}
