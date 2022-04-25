import jwt = require('jsonwebtoken');
import fs = require('fs');
import Login from '../interfaces/Login';

const SECRET = fs.readFileSync('jwt.evaluation.key').toString('utf8');

export default class UserService {
  static login(data: Login): string {
    const token = jwt.sign({ ...data }, SECRET, { expiresIn: '7d', algorithm: 'HS256' });
    return token;
  }
}
