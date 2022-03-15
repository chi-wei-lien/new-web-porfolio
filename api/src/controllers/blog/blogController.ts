import Blog from '../../models/blog';

import { Request, Response } from 'express';

class BlogController {
  async getAll(req: Request, res: Response) {
    const blogs = await Blog.find();
    res.send(blogs);
    console.log(blogs);
  }

  async findOne(req: Request, res: Response) {
    var query = { _id: req.params.id };
    const blog = await Blog.find(query);
    res.send(blog);
    console.log(blog);
  }
}

export = new BlogController();