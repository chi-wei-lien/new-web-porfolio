import { Router } from 'express';
import BlogRouter from './blog/BlogRouter';
import ThemeBRouter from './themeB/ThemeBRouter';

class MasterRouter {
  private _router = Router();
  private _subBlogRouter = BlogRouter;
  private _subrouterB = ThemeBRouter;

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
    this._router.use('/', this._subrouterB);
  }
}

export = new MasterRouter().router;