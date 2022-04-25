// import { Request, Response, NextFunction } from 'express';
import express = require('express');
import User from '../database/models/User';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default class LoginValidation {
  static async emailValidation(
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction,
  ) {
    const { email } = req.body;
    if (!email) return next({ status: 400, message: 'All fields must be filled' });
    if (!emailRegex.test(email)) {
      return next(
        { status: 401, message: 'Incorrect email or password' },
      );
    }
    const result = await User.findOne(
      { where: { email } },
    );
    if (!result) return next({ status: 401, message: 'Incorrect email or password' });
    console.log(result.password);
    req.body.user = result;
    return next();
  }

  static async passwordValidation(
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction,
  ) {
    const { password, user: { dataValues: { password: rightPassword, ...user } } } = req.body;
    if (!password) return next({ status: 400, message: 'All fields must be filled' });
    if (password !== rightPassword) {
      return next(
        { status: 401, message: 'Incorrect email or password"' },
      );
    }
    req.body.user = user;
    return next();
  }
}
