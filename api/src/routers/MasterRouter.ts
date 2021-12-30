import { Router } from 'express';
import BlogRouter from './blog/BlogRouter';
import LoginRouter from './login/LoginRouter';

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
    this._router.use('/blogs', this._subBlogRouter);
    this._router.use('/users', this._subUserRouter);
  }
}

export = new MasterRouter().router;