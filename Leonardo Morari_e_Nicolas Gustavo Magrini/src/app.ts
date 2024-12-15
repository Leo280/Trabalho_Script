import express, { Router } from 'express';
import { mainRouter } from './routes/main-routes';
import path from 'path';

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(mainRouter);

export default app;
