const optionalParams = {
  timestamps: false,
  tableName: 'Matches',
};

module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    home_team: { type: DataTypes.INTEGER, foreignKey: true },
    home_team_goals: DataTypes.INTEGER,
    away_team: { type: DataTypes.INTEGER, foreignKey: true },
    away_team_goals: DataTypes.INTEGER,
  }, optionalParams);

  Match.associate = (models) => {
    Match.belongsToMany(models.Match, { foreignKey: 'home_team', as: 'teams' });
  };

  Match.associate = (models) => {
    Match.belongsToMany(models.Match, { foreignKey: 'away_team', as: 'teams' });
  };

  return Match;
};