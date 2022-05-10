import * as express from 'express';
// import { Router, ErrorRequestHandler } from 'express';
import Routers from './routes';
import errorHandler from './middlewares/Error';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
    this.app.use('/teams', Routers.teamRouter);
    this.app.use('/matches', Routers.matchRouter);
    this.app.use('/login', Routers.userRouter);
    this.app.use('/leaderboard', Routers.leaderBoardRouter);
    this.app.use(errorHandler);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT);
  }

  // public use(route: Router | ErrorRequestHandler, routeName?: string): void {
  //   if (routeName) {
  //     this.app.use(routeName, route);
  //   }
  //   this.app.use(route);
  // }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
