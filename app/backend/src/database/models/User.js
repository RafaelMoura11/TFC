const optionalParams = {
  timestamps: false,
  tableName: 'Users',
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: DataTypes.INTEGER,
    role: DataTypes.DataTypes,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
  }, optionalParams);
  return User;
};