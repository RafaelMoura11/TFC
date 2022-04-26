import Team from '../database/models/Team';

export default class TeamService {
  static getTeams = () => Team.findAll();
}
