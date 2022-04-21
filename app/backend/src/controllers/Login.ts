import { Request, Response } from 'express';
import LoginService from '../services/Login';

export default class LoginController {
  constructor(private Service: LoginService) {
  }

  login(req: Request, res: Response) {
    if (!this.Service.login()) { return res.status(200).send('foi'); }
  }
}
