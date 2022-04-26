import jwt = require('jsonwebtoken');
import fs = require('fs');
import Login from '../interfaces/Login';

const SECRET = fs.readFileSync('jwt.evaluation.key').toString('utf8');

export default class JWTUtils {
  static sign = (data: Login): string => (
    jwt.sign({ ...data }, SECRET, { expiresIn: '7d', algorithm: 'HS256' })
  );

  static verify = (token: string) => jwt.verify(token, SECRET);
}
