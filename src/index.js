import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import { pool } from './db.js';
import __dirname from '../utils.js';
import path from 'path';
import router from './routes/index.routes.js';
import passport from 'passport';
import initializePassport from './auth/passportConfig.js';
import flash from 'connect-flash';
import session from 'express-session';
import dotenv from 'dotenv';
import errorHandlerer from './middlewares/errorHandlerer.js';

dotenv.config();


initializePassport(passport);

const app = express();

const port = 3000;
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(errorHandlerer);


app.on('close', () => {
    pool.end()
      .then(() => console.log('Database conection closed'))
      .catch(err => console.error('Database error ', err));
  });

process.on('SIGINT', () => {
    server.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port} ${__dirname}!`))
