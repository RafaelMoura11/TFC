import express = require('express');
import TeamController from '../controllers/Team';

const teamRouter = express.Router();

teamRouter.get('/', TeamController.getTeams);

export default teamRouter;
