import User from '../database/models/User';
import Login from '../interfaces/Login';
import JWTUtils from '../utils/jwt';

export default class UserService {
  static login(data: Login): string {
    const token = JWTUtils.sign(data);
    return token;
  }

  static async getRole(user: Login) {
    const role = await User.findOne({ attributes: ['role'], where: { email: user.email } });
    return role;
  }
}
