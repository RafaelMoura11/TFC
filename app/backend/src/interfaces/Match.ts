export interface ScoreboardGoals {
  id?: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default interface MatchBody extends ScoreboardGoals {
  inProgress: boolean;
  homeTeam: number;
  awayTeam: number;
}
