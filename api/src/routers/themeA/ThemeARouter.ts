import { NextFunction, Request, Response, Router } from 'express';
import ThemeAController from '../../controllers/ThemeAController';
import { ObjectId } from "mongodb";
import { collections } from "../../db/conn";
import Blog from "../../models/blogs";

class ThemeARouter {
  private _router = Router();
  private _controller = ThemeAController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  
  private _configure() {
    
    /**
     * Getting all blogs from db
     */
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (collections.blogs != null) {
          const blogs = (await collections.blogs.find({}).toArray()) as unknown as Blog[];
          res.status(200).send(blogs);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).send(error.message);
        }
      }
    });

    /**
     * Find a specific blog
     */
    this._router.get("/blog/:id", async (req: Request, res: Response) => {
      const id = req?.params?.id;
  
      try {
          const query = { _id: new ObjectId(id) };
          const blog = (await collections.blogs?.findOne(query)) as unknown as Blog;
  
          if (blog) {
              res.status(200).send(blog);
          }
      } catch (error) {
          res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
      }
    });

    this._router.post("/add", async (req: Request, res: Response) => {
      try {
          const newGame = req.body as Blog;
          const result = await collections.blogs?.insertOne(newGame);
  
          result
              ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
              : res.status(500).send("Failed to create a new game.");
      } catch (error: unknown) {
        res.send("error")
        if (error instanceof Error) {
          res.status(400).send(error.message);
        }
      }
  });
  }
}

export = new ThemeARouter().router;