import jwt = require('jsonwebtoken');
import Login from '../interfaces/Login';

export default class UserService {
  static login(data: Login): string {
    const token = jwt.sign({ ...data }, 'dale', { expiresIn: '7d', algorithm: 'HS256' });
    return token;
  }
}
