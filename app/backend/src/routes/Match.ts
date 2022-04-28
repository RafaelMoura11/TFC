import express = require('express');
import MatchController from '../controllers/Match';

const matchRouter = express.Router();

matchRouter.get('/:inProgress', MatchController.getMatches);
matchRouter.post('/', MatchController.createNewMatch);
matchRouter.patch('/:id/finish', MatchController.finishMatch);

export default matchRouter;
