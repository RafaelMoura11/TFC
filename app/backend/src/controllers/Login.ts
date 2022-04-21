import { Request, Response } from 'express';
import LoginService from '../services/Login';

export default class LoginController {
  static login(req: Request, res: Response) {
    LoginService.login();
    return res.status(200).send('foi');
  }
}
