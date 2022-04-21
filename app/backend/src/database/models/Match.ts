import { Model, DataTypes } from 'sequelize';
import db from '.';

class Match extends Model {
  id: number;

  teamName: string;
}

Match.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  home_team: { type: DataTypes.INTEGER, allowNull: false },
  home_team_goals: { type: DataTypes.INTEGER, allowNull: false },
  away_team: { type: DataTypes.INTEGER, allowNull: false },
  away_team_goals: { type: DataTypes.INTEGER, allowNull: false },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Teams',
  sequelize: db,
  modelName: 'Team',
});

export default Match;
