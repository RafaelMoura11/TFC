import express = require('express');
import MatchController from '../controllers/Match';

const matchRouter = express.Router();

matchRouter.get('/', MatchController.getMatches);

export default matchRouter;
