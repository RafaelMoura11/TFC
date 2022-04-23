import { Request, Response } from 'express';
import Login from '../interfaces/Login';
import UserService from '../services/User';

export default class UserController {
  static async login(req: Request, res: Response) {
    const token = UserService.login(req.body as Login);
    return res.status(200).json({ token });
  }
}
