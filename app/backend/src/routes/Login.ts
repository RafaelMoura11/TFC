import express = require('express');
import LoginService from '../services/Login';
import LoginController from '../controllers/Login';
import User from '../database/models/User';

const Login = new LoginController(new LoginService(new User()));

const loginRouter = express.Router();

loginRouter.post('/', Login.login);

export default loginRouter;
