const optionalParams = {
  timestamps: false,
  tableName: 'Teams',
};

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    team_name: DataTypes.STRING,
  }, optionalParams);

  Team.associate = (models) => {
    Team.hasMany(models.Match, { foreignKey: 'home_team', as: 'teams' });
  };

  Team.associate = (models) => {
    Team.hasMany(models.Match, { foreignKey: 'away_team', as: 'teams' });
  };

  return Team;
};