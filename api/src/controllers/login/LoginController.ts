import { ObjectId } from "mongodb";
import { collections } from "../../db/conn";
import User from "../../models/user";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response, Router } from 'express';

/**
 * add user to req.session
 */
declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

class LoginController {
  async login(req: Request, res: Response) {
    // const token = jwt.sign({ email: 'lien2@purdue.edu', role: "admin" }, "jfaw;eoijfnwar32");
    // return res
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //   })
    //   .status(200)
    //   .json({ message: "Logged in successfully" });


    const sessionUser = {
      email: req.body.email,
    };
    req.session.user = sessionUser;
    res.send(req.body.email);
  }

  async getUsers(req: Request, res: Response) {
    try {
      if (collections.users != null) {
        const users = (await collections.users.find({}).toArray()) as unknown as User[];
        res.status(200).send(users);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async findUsers(req: Request, res: Response) {
    const id = req?.params?.id;

    try {
      const query = { _id: new ObjectId(id) };
      const user = (await collections.users?.findOne(query)) as unknown as User;

      if (user) {
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
  }

  async addUser(req: Request, res: Response) {
    try {

      /**
       * the reason why it is user, is because the parameter passed in is an object
       */
      const newUser = req.body.user as User;
      const result = await collections.users?.insertOne(newUser);

      result
        ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a new user.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    const id = req?.params?.id;

    try {
      const updatedUser: User = req.body as User;
      const query = { _id: new ObjectId(id) };

      const result = await collections.users?.updateOne(query, { $set: updatedUser });

      result
        ? res.status(200).send(`Successfully updated user with id ${id}`)
        : res.status(304).send(`User with id: ${id} not updated`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    const id = req?.params?.id;

    try {
      const query = { _id: new ObjectId(id) };
      const result = await collections.users?.deleteOne(query);

      if (result && result.deletedCount) {
        res.status(202).send(`Successfully removed user with id ${id}`);
      } else if (!result) {
        res.status(400).send(`Failed to remove user with id ${id}`);
      } else if (!result.deletedCount) {
        res.status(404).send(`User with id ${id} does not exist`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      }
    }
  }
}

export = new LoginController();