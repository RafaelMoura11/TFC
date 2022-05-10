import { NextFunction, Request, Response } from 'express';
import MatchService from '../services/Match';
import MatchBody, { ScoreboardGoals } from '../interfaces/Match';
import TeamService from '../services/Team';

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

  private static checkIfTeamExists = async (id: string) => TeamService.getTeamById(id);

  static async createNewMatch(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const newMatch = req.body as MatchBody;
    const homeTeam = await MatchController.checkIfTeamExists(newMatch.homeTeam.toString());
    const awayTeam = await MatchController.checkIfTeamExists(newMatch.awayTeam.toString());
    if (!homeTeam || !awayTeam) {
      return next({
        status: 404, message: 'There is no team with such id!' });
    }
    const createdMatch = await MatchService.createNewMatch(newMatch);
    return res.status(201).json(createdMatch);
  }

  static async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await MatchService.finishMatch(id);
    return res.status(200).json('Game Over!');
  }

  static async updateScoreboard(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const goals = req.body;
    await MatchService.updateScoreboard({ id, ...goals } as ScoreboardGoals);
    return res.status(200).json('Scoreboard updated!');
  }

  static async getLeaderBoardHome(_req: Request, res: Response): Promise<Response> {
    const LeaderBoard = await MatchService.getLeaderBoard('home');
    return res.status(200).json(LeaderBoard);
  }

  static async getLeaderBoardAway(_req: Request, res: Response): Promise<Response> {
    const LeaderBoard = await MatchService.getLeaderBoard('away');
    return res.status(200).json(LeaderBoard);
  }
}
