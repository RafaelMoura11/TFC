import User from '../database/models/User';

export default class LoginService {
  constructor(private Model: User) {}

  login() {
    return this;
  }
}
