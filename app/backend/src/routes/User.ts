import express = require('express');
import LoginValidation from '../middlewares/LoginValidation';
import UserController from '../controllers/User';

const userRouter = express.Router();

userRouter.post(
  '/',
  LoginValidation.emailValidation,

  LoginValidation.passwordValidation,

  UserController.login,
);

export default userRouter;
