import { Request, Response } from 'express';
import TeamService from '../services/Team';

export default class TeamController {
  static async getTeams(_req: Request, res: Response): Promise<Response> {
    const teams = await TeamService.getTeams();
    return res.status(200).json([...teams]);
  }
}
