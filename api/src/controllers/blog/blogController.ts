import Blog from '../../models/blog';

import { Request, Response } from 'express';

class BlogController {
  async getAll(req: Request, res: Response) {
    const blogs = await Blog.find();
    res.send(blogs);
    console.log(blogs);
  }
}

export = new BlogController();