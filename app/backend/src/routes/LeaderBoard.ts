import express = require('express');
import MatchController from '../controllers/Match';

const leaderBoardRouter = express.Router();

leaderBoardRouter.get('/home', MatchController.getLeaderBoardHome);
leaderBoardRouter.get('/away', MatchController.getLeaderBoardAway);

export default leaderBoardRouter;
