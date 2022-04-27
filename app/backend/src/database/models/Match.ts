import { Model, DataTypes } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;
}
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

Match.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  homeTeam: { type: DataTypes.INTEGER, allowNull: false, field: 'home_team' },
  homeTeamGoals: { type: DataTypes.INTEGER, allowNull: false, field: 'home_team_goals' },
  awayTeam: { type: DataTypes.INTEGER, allowNull: false, field: 'away_team' },
  awayTeamGoals: { type: DataTypes.INTEGER, allowNull: false, field: 'away_team_goals' },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'matches',
  sequelize: db,
  modelName: 'Match',
});

Team.hasMany(Match, { foreignKey: 'id', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'id', as: 'awayTeam' });

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
