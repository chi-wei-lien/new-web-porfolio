import { Router } from 'express';
import BlogRouter from './blog/BlogRouter';
import LoginRouter from './login/LoginRouter';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const allowedOrigins = ['https://loophole.engineer', 'http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

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
    this._router.use('/blogs', this._subBlogRouter);
    this._router.use('/login', this._subUserRouter);
  }
}

export = new MasterRouter().router;