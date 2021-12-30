import { NextFunction, Request, Response, Router } from 'express';
import ThemeAController from '../../controllers/blog/BlogController';

class BlogRouter {
  private _router = Router();
  private _controller = ThemeAController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  
  private _configure() {
    
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      return this._controller.getBlogs(req, res);
    });

    this._router.get("/blog/:id", async (req: Request, res: Response) => {
      return this._controller.findBlogs(req, res);
    });

    this._router.post("/add", async (req: Request, res: Response) => {
      return this._controller.addBlog(req, res);
    });

    this._router.put("/update/:id", async (req: Request, res: Response) => {
      return this._controller.updateBlog(req, res);
    });

    this._router.delete("/delete/:id", async (req: Request, res: Response) => {
      return this._controller.deleteBlog(req, res);
    });
  }
}

export = new BlogRouter().router;