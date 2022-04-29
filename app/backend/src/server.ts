import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

const app = new App();

app.start(PORT);
