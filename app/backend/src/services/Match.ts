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

  static getMatchesInProgress = () => Match.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
    where: { inProgress: true },
  });

  static createNewMatch = async (newMatch: MatchBody) => {
    const createdMatch = await Match.create(newMatch);
    return createdMatch;
  };
}
