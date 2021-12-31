import { NextFunction, Request, Response, Router } from 'express';
import ThemeBController from '../../controllers/login/LoginController';

class LoginRouter {
  private _router = Router();
  private _controller = ThemeBController;

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
      return this._controller.login(req, res);
    });

    // this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    //   return this._controller.getUsers(req, res);
    // });

    this._router.get("/user/:id", async (req: Request, res: Response) => {
      return this._controller.findUsers(req, res);
    });

    this._router.post("/add", async (req: Request, res: Response) => {
      return this._controller.addUser(req, res);
    });

    this._router.put("/update/:id", async (req: Request, res: Response) => {
      return this._controller.updateUser(req, res);
    });

    this._router.delete("/delete/:id", async (req: Request, res: Response) => {
      return this._controller.deleteUser(req, res);
    });
  }
}

export = new LoginRouter().router;