import Team from '../database/models/Team';
import Match from '../database/models/Match';
import MatchBody, { ScoreboardGoals } from '../interfaces/Match';
import TeamService from './Team';
import ScoreBoard from '../utils/ScoreBoard';
import FilterType from '../types/FilterType';

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

  static updateScoreboard = async ({
    id,
    homeTeamGoals,
    awayTeamGoals,
  }: ScoreboardGoals) => Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

  static getLeaderBoard = async (filterType: FilterType) => {
    const matches = await MatchService.getMatches();
    const finishedMatches = matches.filter((match) => !match.inProgress);
    const teams = await TeamService.getTeams();
    const leaderBoardMapper = ScoreBoard(teams, finishedMatches, filterType);
    return leaderBoardMapper.sort((a, b) => {
      if (b.totalPoints === a.totalPoints && b.goalsBalance === a.goalsBalance) {
        return b.goalsFavor - a.goalsFavor;
      } if (b.totalPoints === a.totalPoints) {
        return b.goalsBalance - a.goalsBalance;
      }
      return b.totalPoints - a.totalPoints;
    });
  };
}
