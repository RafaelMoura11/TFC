import { App } from './app';
import 'dotenv/config';
import Routers from './routes';
import errorHandler from './middlewares/Error';

const PORT = process.env.PORT || 3001;

const app = new App();

app.use(Routers.userRouter, '/login');
app.use(Routers.teamRouter, '/teams');

app.use(errorHandler);

app.start(PORT);
