import express = require('express');
import LoginValidation from '../middlewares/LoginValidation';
import MatchController from '../controllers/Match';
import isTheSameTeam from '../middlewares/NewMatch';

const matchRouter = express.Router();

matchRouter.get('/:inProgress', MatchController.getMatchesByInProgress);
matchRouter.get('/', MatchController.getMatches);
matchRouter.post('/', LoginValidation.jwtValidation, isTheSameTeam, MatchController.createNewMatch);
matchRouter.patch('/:id/finish', MatchController.finishMatch);

export default matchRouter;
