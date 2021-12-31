import { Router } from 'express';
import BlogRouter from './blog/BlogRouter';
import LoginRouter from './login/LoginRouter';
import cors from 'cors';
import expressSession from "express-session";
import MongoDBStore from "connect-mongodb-session";
import cookieParser from 'cookie-parser';

const allowedOrigins = ['https://loophole.engineer', 'http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true
};

const mongoStore = MongoDBStore(expressSession);
let store: MongoDBStore.MongoDBStore;

if (process.env.DB_CONN_STRING != null) {
  store = new mongoStore({
    collection: "userSessions",
    uri: process.env.DB_CONN_STRING,
    expires: 1000,
  });
}


class MasterRouter {
  private _router = Router();
  private _subBlogRouter = BlogRouter;
  private _subUserRouter = LoginRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use(cors(options));
    this._router.use(expressSession({
      name: "test_sess",
      secret: "SESS_SECRET",
      store: store,
      saveUninitialized: false,
      resave: false,
      cookie: {
        sameSite: false,
        secure: false,
        maxAge: 10000,
        httpOnly: true,
      },
    }))
    this._router.use('/blogs', this._subBlogRouter);
    this._router.use('/login', this._subUserRouter);
  }
}

export = new MasterRouter().router;