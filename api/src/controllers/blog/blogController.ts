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

  async create(req: Request, res: Response) {
    var newBlog = new Blog({
      title: req.body.blogTitle,
      content: req.body.blogContent,
      date: new Date,
      pic: ''
    });
    newBlog .save((err, doc) => {
      if (!err)
        console.log("success")
      else
        console.log('Error during record insertion : ' + err);
    });
  }
}

export = new BlogController();