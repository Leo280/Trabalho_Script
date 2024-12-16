import express from 'express';
import path from 'path';
import { mainRouter } from './routes/main-routes';

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(mainRouter);

export default app;
