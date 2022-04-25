import { App } from './app';
import 'dotenv/config';
import userRouter from './routes/User';
import errorHandler from './middlewares/Error';

const PORT = process.env.PORT || 3001;

const app = new App();

app.use(userRouter, '/login');

app.use(errorHandler);

app.start(PORT);
