import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;

  username: string;

  role: string;

  email: string;

  password: string;
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'users',
  sequelize: db,
  modelName: 'User',
});

export default User;
