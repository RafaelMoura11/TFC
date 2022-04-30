import Team from '../database/models/Team';
import Match from '../database/models/Match';
import MatchBody from '../interfaces/Match';

export default class MatchService {
  static getMatches = () => Match.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });

  static getMatchesByInProgress = (inProgress: boolean) => Match.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
    where: { inProgress },
  });

  static createNewMatch = async ({ homeTeam,
    homeTeamGoals, awayTeam, awayTeamGoals, inProgress }: MatchBody) => {
    const createdMatch = await Match.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    });
    return createdMatch;
  };

  static finishMatch = async (id: string) => Match.update({ inProgress: false }, { where: { id } });
}
