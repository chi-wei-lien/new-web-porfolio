import { ObjectId } from "mongodb";
import { collections } from "../db/conn";
import Blog from "../models/blogs";
import { NextFunction, Request, Response, Router } from 'express';


class BlogController {

  async getBlogs(req: Request, res: Response) {
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
  }

  async findBlogs(req: Request, res: Response) {
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
  }

  async addBlog(req: Request, res: Response) {
    try {
      const newGame = req.body as Blog;
      const result = await collections.blogs?.insertOne(newGame);

      result
          ? res.status(201).send(`Successfully created a new blog with id ${result.insertedId}`)
          : res.status(500).send("Failed to create a new blog.");
    } catch (error: unknown) {
      res.send("error")
      if (error instanceof Error) {
        res.status(400).send(error.message);
      }
    }
  }
}
  
export = new BlogController();