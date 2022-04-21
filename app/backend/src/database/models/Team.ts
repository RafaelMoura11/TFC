import { Model, DataTypes } from 'sequelize';
import db from '.';

class Team extends Model {
  id: number;

  teamName: string;
}

Team.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  team_name: { type: DataTypes.STRING, allowNull: false },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Teams',
  sequelize: db,
  modelName: 'Team',
});

export default Team;
