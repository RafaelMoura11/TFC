import jwt = require('jsonwebtoken');
// import fs = require('fs');
// import path = require('path');
import Login from '../interfaces/Login';

// const SECRET = fs.readFileSync(path.join('../jwt.evaluation.key'));

export default class UserService {
  static login(data: Login): string {
    const token = jwt.sign({ ...data }, 'super_senha', { expiresIn: '7d', algorithm: 'HS256' });
    return token;
  }
}
