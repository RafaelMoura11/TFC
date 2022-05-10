import Team from '../interfaces/Team';
import MatchBody from '../interfaces/Match';
import FilterType from '../types/FilterType';

const totalVictoriesMapper = (id: number, matches: MatchBody[]) => (
  matches.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals > cur.awayTeamGoals) return acc + 1;
    if (cur.awayTeam === id && cur.homeTeamGoals < cur.awayTeamGoals) return acc + 1;
    return acc;
  }, 0)
);

const totalDrawsMapper = (id: number, matches: MatchBody[]) => (
  matches.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals === cur.awayTeamGoals) return acc + 1;
    if (cur.awayTeam === id && cur.homeTeamGoals === cur.awayTeamGoals) return acc + 1;
    return acc;
  }, 0)
);

const totalLossesMapper = (id: number, matches: MatchBody[]) => (
  matches.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals < cur.awayTeamGoals) return acc + 1;
    if (cur.awayTeam === id && cur.homeTeamGoals > cur.awayTeamGoals) return acc + 1;
    return acc;
  }, 0)
);

const goalsFavorMapper = (id: number, matches: MatchBody[]) => (
  matches.reduce((acc, cur) => {
    if (cur.homeTeam === id) return acc + cur.homeTeamGoals;
    if (cur.awayTeam === id) return acc + cur.awayTeamGoals;
    return acc;
  }, 0)
);

const goalsOwnMapper = (id: number, matches: MatchBody[]) => (
  matches.reduce((acc, cur) => {
    if (cur.homeTeam === id) return acc + cur.awayTeamGoals;
    if (cur.awayTeam === id) return acc + cur.homeTeamGoals;
    return acc;
  }, 0)
);

const totalMapper = (v: number, d: number, l: number) => ({
  totalPoints: v * 3 + d,
  totalGames: v + d + l,
  totalVictories: v,
  totalDraws: d,
  totalLosses: l,
});

const goalMapper = (gp: number, gc: number) => ({
  goalsFavor: gp,
  goalsOwn: gc,
  goalsBalance: gp - gc,
});

const filterByType = (team: Team) => ({
  home: (match: MatchBody) => match.homeTeam === team.id,
  away: (match: MatchBody) => match.awayTeam === team.id,
  all: (match: MatchBody) => match.homeTeam === team.id || match.awayTeam === team.id,
});

const ScoreBoard = (teams: Team[], matches: MatchBody[], filterType: FilterType) => (
  teams.map((team) => {
    const matchesInHome = matches.filter(filterByType(team)[filterType]);
    const totalVictories = totalVictoriesMapper(team.id, matchesInHome);
    const totalDraws = totalDrawsMapper(team.id, matchesInHome);
    const totalLosses = totalLossesMapper(team.id, matchesInHome);
    const goalsFavor = goalsFavorMapper(team.id, matchesInHome);
    const goalsOwn = goalsOwnMapper(team.id, matchesInHome);
    const totalObject = totalMapper(totalVictories, totalDraws, totalLosses);
    const goalsObject = goalMapper(goalsFavor, goalsOwn);
    const efficiency = ((totalObject.totalPoints / (totalObject.totalGames * 3)) * 100).toFixed(2);
    return {
      name: team.teamName,
      ...totalObject,
      ...goalsObject,
      efficiency: Number(efficiency),
    };
  })
);

export default ScoreBoard;
