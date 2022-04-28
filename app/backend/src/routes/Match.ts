import express = require('express');
import MatchController from '../controllers/Match';

const matchRouter = express.Router();

matchRouter.get('/:inProgress', MatchController.getMatches);

export default matchRouter;
