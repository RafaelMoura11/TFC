import express = require('express');
import LoginValidation from '../middlewares/LoginValidation';
import LoginController from '../controllers/User';

const loginRouter = express.Router();

loginRouter.post(
  '/',
  LoginValidation.emailValidation,

  LoginValidation.passwordValidation,

  LoginController.login,
);

export default loginRouter;
