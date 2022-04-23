import express = require('express');
import LoginController from '../controllers/User';

const loginRouter = express.Router();

loginRouter.post('/', LoginController.login);

export default loginRouter;
