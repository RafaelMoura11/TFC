import express = require('express');
import MatchController from '../controllers/Match';

const leaderBoardRouter = express.Router();

leaderBoardRouter.get('/home', MatchController.getLeaderBoardHome);

export default leaderBoardRouter;
