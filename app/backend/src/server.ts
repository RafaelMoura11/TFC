import { App } from './app';
import 'dotenv/config';
import loginRouter from './routes/Login';

const PORT = process.env.PORT || 3001;

const app = new App();

app.use('/login', loginRouter);

app.start(PORT);
