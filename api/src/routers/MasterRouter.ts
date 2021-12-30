import { Router } from 'express';
import BlogRouter from './blog/BlogRouter';
import LoginRouter from './login/LoginRouter';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000', 'https://loophole.engineer'];

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
    this._router.use('/users', this._subUserRouter);
  }
}

export = new MasterRouter().router;