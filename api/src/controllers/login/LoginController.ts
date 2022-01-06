import { ObjectId } from "mongodb";
import User from "../../models/user";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response, Router } from 'express';

class LoginController {
  async login(req: Request, res: Response) {
    User.findOne({ email: req.body.user.email })
      .then(user => {
        if (!user) {
          const newUser = new User({ email: req.body.user.email })
          newUser.save()
            .then(user => {
              res.status(200).json({ token: generateToken(user) })
            })
            .catch(error => {
              res.status(500).json(error)
            })
        } else {
          res.status(200).json({ token: generateToken(user) })
        }
      })
  }
}

function generateToken(user: any) {
  return jwt.sign({ data: user }, process.env.TOCKEN_SECRET || "", { expiresIn: 60 * 60 * 10 })
}

export = new LoginController();