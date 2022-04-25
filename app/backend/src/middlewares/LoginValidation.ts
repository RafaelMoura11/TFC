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
    if (!email) return next({ status: 400, message: 'O campo email é obrigatório' });
    if (!emailRegex.test(email)) {
      return next(
        { status: 400, message: 'Email inválido' },
      );
    }
    const result = await User.findOne({ where: { email } });
    if (!result) return next({ status: 404, message: 'Email e/ou senha incorreto(s)' });
    req.body.user = result;
    return next();
  }

  static async passwordValidation(
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction,
  ) {
    const { password, user: { password: rightPassword } } = req.body;
    console.log('oi');
    if (!password) return next({ status: 400, message: 'O campo password é obrigatório' });
    if (password !== rightPassword) {
      return next(
        { status: 400, message: 'Email e/ou senha incorreto(s)' },
      );
    }
    return next();
  }
}
