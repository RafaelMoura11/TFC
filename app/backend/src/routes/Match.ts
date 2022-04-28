import express = require('express');
import LoginValidation from '../middlewares/LoginValidation';
import MatchController from '../controllers/Match';

const matchRouter = express.Router();

matchRouter.get('/:inProgress', MatchController.getMatches);
matchRouter.post('/', LoginValidation.jwtValidation, MatchController.createNewMatch);
matchRouter.patch('/:id/finish', MatchController.finishMatch);

export default matchRouter;
