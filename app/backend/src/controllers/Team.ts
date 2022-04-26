import { Request, Response } from 'express';
import TeamService from '../services/Team';

export default class TeamController {
  static async getTeams(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    if (id) {
      const team = await TeamService.getTeamById(id);
      return res.status(200).json(team);
    }
    const teams = await TeamService.getTeams();
    return res.status(200).json([...teams]);
  }
}
