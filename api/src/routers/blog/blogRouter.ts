import { NextFunction, Request, Response, Router } from 'express';
import BlogController from '../../controllers/blog/blogController';

class blogRouter {
  private _router = Router();
  private _controller = BlogController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      return this._controller.getAll(req, res);
    });
  }
}

export = new blogRouter().router;