import User from '../database/models/User';

export default class LoginService {
  static login() {
    User.create();
  }
}
