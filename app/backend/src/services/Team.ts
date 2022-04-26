import Team from '../database/models/Team';

export default class TeamService {
  static getTeams = () => Team.findAll();

  static getTeamById = (id: string) => Team.findOne({ where: { id } });
}
